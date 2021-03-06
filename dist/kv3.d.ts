export declare enum KeyValues3Type {
    Comment = 0,
    MultiLineComment = 1,
    KeyValue_Boolean = 2,
    KeyValue_Int = 3,
    KeyValue_Double = 4,
    KeyValue_String = 5,
    KeyValue_MultiLineString = 6,
    KeyValue_Resource = 7,
    KeyValue_Deferred_Resource = 8,
    KeyValue_Array = 9,
    KeyValue_Object = 10,
    Header = 11
}
export declare type KeyValues3 = {
    Type: KeyValues3Type;
    Key: string;
    Value: string | KeyValues3[];
};
export declare const emptyKeyValues: KeyValues3;
export declare function NewKeyValue(Key: string, Value: string): KeyValues3;
export declare function NewKeyValueInt(Key: string, Value: number): KeyValues3;
export declare function NewKeyValueDouble(Key: string, Value: number): KeyValues3;
export declare function NewKeyValueBoolean(Key: string, Value: boolean): KeyValues3;
export declare function NewKeyValuesArray(Key: string, Value: KeyValues3[]): KeyValues3;
export declare function NewKeyValuesObject(Key: string, Value: KeyValues3[]): KeyValues3;
/**
 * Read from KeyValues file
 * @param path A file path of KeyValues
 * @param encoding Default utf8
 */
export declare function loadFromFile(path: string, encoding?: string): Promise<KeyValues3[]>;
/**
 * Read from KeyValues format
 * @param content A string of KeyValues format
 */
export declare function loadFromString(content: string): Promise<KeyValues3[]>;
export declare function formatKeyValues(root: KeyValues3[], tab?: string, isParentArray?: boolean): string;
/**
 * @param path file path
 * @param root KeyValues3 object
 * @param encoding Default utf8
 */
export declare function writeFile(path: any, root: KeyValues3[], encoding?: string): Promise<void>;
declare const _default: {
    loadFromFile: typeof loadFromFile;
    loadFromString: typeof loadFromString;
    formatKeyValues: typeof formatKeyValues;
    writeFile: typeof writeFile;
    KeyValues3Type: typeof KeyValues3Type;
};
export default _default;
