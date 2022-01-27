import { Address, BigInt, bigInt, ethereum, log } from "@graphprotocol/graph-ts"
import { ElementCount } from "../generated/schema"

const enum ElementType {
    TX = 0,
    EVENT = 1
}

export function procEventCount(name: string, event: ethereum.Event): void {
    let type = ElementType.EVENT;
    debugEventLog(ElementType.EVENT, name, event);
  
    let id = genID(type, event.transaction.from.toHexString(), event.address.toHexString(), name)
    let entity = getElementCount(type, id, event.transaction.from.toHexString(), event.address.toHexString(), name);
    incElementCount(type, id, entity);
}

export function procEventCountForTemplate(name: string, event: ethereum.Event): void {
    let type = ElementType.EVENT;
    incElementCountForTemplate(type, event.transaction.from.toHexString(), name);
}

function genID(type: ElementType, from: string, to: string, name: string): string {
    log.info("[genID: {}] from: {}, to: {}, name: {}", [
        type.toString(),
        from,
        to,
        name
    ]);
    return type.toString() + "-" + from + "-" + to + "-" + name;
}

function getElementCount(type: ElementType, id: string, from: string, to: string, name: string): ElementCount {
    let entity = ElementCount.load(id);
    if (!entity) {
        entity = new ElementCount(id);
        entity.type = type;
        entity.from = from;
        entity.to = to;
        entity.name = name;
        entity.count = zeroBigInt();
    }
    log.info("[getElementCount: {}] id: {}, from: {}, to: {}, name: {}", [type.toString(), id, from, to, name]);
    return entity
}

function incElementCount(type: ElementType, id: string, entity: ElementCount): void {
    entity.count = bigInt.plus(entity.count, BigInt.fromI32(1));
    log.info("[incElementCount: {}] id: {}, count: {}", [
        type.toString(), 
        id, 
        entity.count.toString()
    ]);
    entity.save();
}

function zeroBigInt(): BigInt {
    return BigInt.fromI32(0);
}

function debugEventLog(type: ElementType, name: string, element: ethereum.Event): void {
    log.info("[debugEventLog: {}] name: {}, address: {}, tx_hash: {}", [
        type.toString(), 
        name, 
        element.address.toHexString(), 
        element.transaction.hash.toHexString()
    ]);
}

function incElementCountForTemplate(type: ElementType, from: string, name: string): void {
    let allId = genID(type, from, "all", name);
    let allEntity = getElementCount(type, allId, from, "all", name);
    incElementCount(type, allId, allEntity);
}