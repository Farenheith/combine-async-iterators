declare function combineAsyncIterators(
    ...iterators: AsyncIterableIterator<any>[]
): AsyncIterableIterator<any>;

declare namespace combineAsyncIterators {
    interface CombineOptions {
        throwError?: boolean;
        errorCallback?: (err: Error) => any;
    }
}

declare function combineAsyncIterators(
    options: combineAsyncIterators.CombineOptions,
    ...iterators: AsyncIterableIterator<any>[]
): AsyncIterableIterator<any>;

export = combineAsyncIterators;
