interface CADESPlugin_ObjectNames {
    'CAPICOM.Store': CAPICOM.Store;
    'CAdESCOM.CPSigner': CAdESCOM_CPSigner;
}

interface CADESPlugin_LogLevel {
    LOG_LEVEL_DEBUG: 4;
    LOG_LEVEL_INFO: 2;
    LOG_LEVEL_ERROR: 1;
}

interface CAdESCOM_CPSigner {

}

interface CADESPlugin extends CAPICOM.StoreLocation, CAPICOM.StoreName, CADESPlugin_LogLevel {
    JSModuleVersion: string;
    current_log_level: number;
    async_spawn: <T> (generatorFun: (...args: any[]) => Iterator<T>) => T;
    set: (obj: CADESPlugin) => void;
    set_log_level: (level: ValuesOf<CADESPlugin>) => void;
    getLastError: (exception: Error) => string;

    /*CADESCOM_LOCAL_MACHINE_STORE: number;
    CADESCOM_CURRENT_USER_STORE: number;
    CADESCOM_CONTAINER_STORE: number;

    CAPICOM_MY_STORE: string;

    CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED: number;

    CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED: number;
    CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING: number;
    CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE: number;

    XmlDsigGost3410UrlObsolete: string;
    XmlDsigGost3411UrlObsolete: string;
    XmlDsigGost3410Url: string;
    XmlDsigGost3411Url: string;

    CADESCOM_CADES_DEFAULT: number;
    CADESCOM_CADES_BES: number;
    CADESCOM_CADES_T: number;
    CADESCOM_CADES_X_LONG_TYPE_1: number;

    CADESCOM_ENCODE_BASE64: number;
    CADESCOM_ENCODE_BINARY: number;
    CADESCOM_ENCODE_ANY: number;

    CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT: number;
    CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN: number;
    CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY: number;

    CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME: number;
    CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME: number;

    CAPICOM_CERTIFICATE_FIND_SHA1_HASH: number;
    CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME: number;
    CAPICOM_CERTIFICATE_FIND_ISSUER_NAME: number;
    CAPICOM_CERTIFICATE_FIND_ROOT_NAME: number;
    CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME: number;
    CAPICOM_CERTIFICATE_FIND_EXTENSION: number;
    CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY: number;
    CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY: number;
    CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY: number;
    CAPICOM_CERTIFICATE_FIND_TIME_VALID: number;
    CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID: number;
    CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED: number;
    CAPICOM_CERTIFICATE_FIND_KEY_USAGE: number;

    CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE: number;

    CAPICOM_PROPID_ENHKEY_USAGE: number;

    CAPICOM_OID_OTHER: number;
    CAPICOM_OID_KEY_USAGE_EXTENSION: number;

    CAPICOM_EKU_CLIENT_AUTH: number;
    CAPICOM_EKU_SMARTCARD_LOGON: number;
    CAPICOM_EKU_OTHER: number;

    CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME: number;
    CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME: number;
    CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION: number;
    CADESCOM_ATTRIBUTE_OTHER: number;

    CADESCOM_STRING_TO_UCS2LE: number;
    CADESCOM_BASE64_TO_BINARY: number;

    CADESCOM_DISPLAY_DATA_NONE: number;
    CADESCOM_DISPLAY_DATA_CONTENT: number;
    CADESCOM_DISPLAY_DATA_ATTRIBUTE: number;

    CADESCOM_ENCRYPTION_ALGORITHM_RC2: number;
    CADESCOM_ENCRYPTION_ALGORITHM_RC4: number;
    CADESCOM_ENCRYPTION_ALGORITHM_DES: number;
    CADESCOM_ENCRYPTION_ALGORITHM_3DES: number;
    CADESCOM_ENCRYPTION_ALGORITHM_AES: number;
    CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89: number;

    CADESCOM_HASH_ALGORITHM_SHA1: number;
    CADESCOM_HASH_ALGORITHM_MD2: number;
    CADESCOM_HASH_ALGORITHM_MD4: number;
    CADESCOM_HASH_ALGORITHM_MD5: number;
    CADESCOM_HASH_ALGORITHM_SHA_256: number;
    CADESCOM_HASH_ALGORITHM_SHA_384: number;
    CADESCOM_HASH_ALGORITHM_SHA_512: number;
    CADESCOM_HASH_ALGORITHM_CP_GOST_3411: number;
    CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256: number;
    CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512: number;*/

}

interface CADESPluginAsync extends CADESPlugin {
    CreateObjectAsync: <T extends keyof CADESPlugin_ObjectNames> (objname: T) => Promise<CADESPlugin_ObjectNames[T]>;
}

interface CADESPluginSync extends CADESPlugin {
    CreateObject: <T extends keyof CADESPlugin_ObjectNames> (objname: T) => CADESPlugin_ObjectNames[T];
}

declare module "cadesplugin" {
    export = cadesplugin;
}

declare var cadesplugin: CADESPluginAsync | CADESPluginSync;