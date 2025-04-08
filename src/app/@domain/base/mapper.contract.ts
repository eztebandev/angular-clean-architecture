export abstract class MapperFull<E, R> {
    abstract toDomainObject(Param: R): E;
    abstract toDataDto(param: E): R;
}

export abstract class MapperNoBody<E, R> {
    abstract toDomainObject(Param: R): E;
}
