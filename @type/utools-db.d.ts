/**
 *  @author      : couriourc 
 *  @description : 
 *  @complete    : false
 *  @createDate  : Sat, 25 Dec 2021 04:00:21 GMT
 *  @version     : 1.0.0
*/

declare interface db {
    get(id: string): { _id: string, _rev: string, data: string }
    remove(doc: string | object): {
        id: string,
        ok: boolean,
        rev: string,
    }
    bulkDocs(docs: { _id: string, data: string, _rev: string }[]): { id: string, ok: boolean, rev: string }[];
    allDocs(key: string | string[]): { _id: string, _rev: string, data: string }[];

    postAttachment(docId: string, attachment: Buffer | Uint8Array, type: string): {
        id: string,
        ok: boolean,
        rev: string
    }
    getAttachment(docId: string): Uint8Array;

    getAttachmentType(docId: string): string;


}

declare interface dbStorage {
    setItem(key: string, value: any)
    getItem(key: string): any;
    removeItem(key: string);
}