declare namespace CAPICOM {
    interface StoreLocationPlugin {
       readonly CAPICOM_LOCAL_MACHINE_STORE: 1;
       readonly CAPICOM_CURRENT_USER_STORE: 2;
    }

    interface CAPICOM_STORE_LOCATION {
       readonly CAPICOM_MEMORY_STORE: 0,
       readonly CAPICOM_LOCAL_MACHINE_STORE: 1,
       readonly CAPICOM_CURRENT_USER_STORE: 2,
       readonly CAPICOM_ACTIVE_DIRECTORY_USER_STORE: 3,
       readonly CAPICOM_SMART_CARD_USER_STORE: 4,
    }

    interface StoreNamePlugin {
       readonly CAPICOM_MY_STORE: 'My';
    }

    interface CAPICOM_STORE_NAME extends StoreNamePlugin {
       readonly CAPICOM_CA_STORE: 'Ca';
       readonly CAPICOM_OTHER_STORE: 'AddressBook';
       readonly CAPICOM_ROOT_STORE: 'Root';
    }

    interface StoreOpenModePlugin {
       readonly CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED: 2;
    }

    interface CAPICOM_STORE_OPEN_MODE extends StoreOpenModePlugin {
       readonly CAPICOM_STORE_OPEN_READ_ONLY: 0;
       readonly CAPICOM_STORE_OPEN_READ_WRITE: 1;
       readonly CAPICOM_STORE_OPEN_EXISTING_ONLY: 128;
       readonly CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED: 256;
    }

    interface CAPICOM_CERTIFICATE_FIND_TYPE {
       readonly CAPICOM_CERTIFICATE_FIND_SHA1_HASH: 0;
       readonly CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME: 1;
       readonly CAPICOM_CERTIFICATE_FIND_ISSUER_NAME: 2;
       readonly CAPICOM_CERTIFICATE_FIND_ROOT_NAME: 3;
       readonly CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME: 4;
       readonly CAPICOM_CERTIFICATE_FIND_EXTENSION: 5;
       readonly CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY: 6;
       readonly CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY: 7;
       readonly CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY: 8;
       readonly CAPICOM_CERTIFICATE_FIND_TIME_VALID: 9;
       readonly CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID: 10;
       readonly CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED: 11;
       readonly CAPICOM_CERTIFICATE_FIND_KEY_USAGE: 12;
    }

    interface CAPICOM_CERTIFICATE_INCLUDE_OPTION {
       readonly CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT: 0;
       readonly CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY: 2;
       readonly CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN: 1;
    }

    interface CertIntoTypePlugin {
       readonly CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME: 0;
       readonly CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME: 1;
    }

    interface CAPICOM_CERT_INFO_TYPE extends CertIntoTypePlugin {
       readonly CAPICOM_CERT_INFO_SUBJECT_EMAIL_NAME: 2;
       readonly CAPICOM_CERT_INFO_ISSUER_EMAIL_NAME: 3;
       readonly CAPICOM_CERT_INFO_SUBJECT_UPN: 4;
       readonly CAPICOM_CERT_INFO_ISSUER_UPN: 5;
       readonly CAPICOM_CERT_INFO_SUBJECT_DNS_NAME: 6;
       readonly CAPICOM_CERT_INFO_ISSUER_DNS_NAME: 7;
    }

    interface KeyUsagePlugin {
       readonly CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE: 128;
    }

    interface CAPICOM_KEY_USAGE extends KeyUsagePlugin {
       readonly CAPICOM_NON_REPUDIATION_KEY_USAGE: 64;
       readonly CAPICOM_KEY_ENCIPHERMENT_KEY_USAGE: 32;
       readonly CAPICOM_DATA_ENCIPHERMENT_KEY_USAGE: 16;
       readonly CAPICOM_KEY_AGREEMENT_KEY_USAGE: 8;
       readonly CAPICOM_KEY_CERT_SIGN_KEY_USAGE: 4;
       readonly CAPICOM_OFFLINE_CRL_SIGN_KEY_USAGE: 2;
       readonly CAPICOM_CRL_SIGN_KEY_USAGE: 2;
       readonly CAPICOM_ENCIPHER_ONLY_KEY_USAGE: 1;
       readonly CAPICOM_DECIPHER_ONLY_KEY_USAGE: 32768;
    }

    interface PropIDPlugin {
       readonly CAPICOM_PROPID_ENHKEY_USAGE: 9;
    }

    interface CAPICOM_PROPID extends PropIDPlugin {
       readonly CAPICOM_PROPID_UNKNOWN: 0;
       readonly CAPICOM_PROPID_KEY_PROV_HANDLE: 1;
       readonly CAPICOM_PROPID_KEY_PROV_INFO: 2;
       readonly CAPICOM_PROPID_SHA1_HASH: 3;
       readonly CAPICOM_PROPID_HASH_PROP: 3;
       readonly CAPICOM_PROPID_MD5_HASH: 4;
       readonly CAPICOM_PROPID_KEY_CONTEXT: 5;
       readonly CAPICOM_PROPID_KEY_SPEC: 6;
       readonly CAPICOM_PROPID_IE30_RESERVED: 7;
       readonly CAPICOM_PROPID_PUBKEY_HASH_RESERVED: 8;
       readonly CAPICOM_PROPID_CTL_USAGE: 9;
       readonly CAPICOM_PROPID_NEXT_UPDATE_LOCATION: 10;
       readonly CAPICOM_PROPID_FRIENDLY_NAME: 11;
       readonly CAPICOM_PROPID_PVK_FILE: 12;
       readonly CAPICOM_PROPID_DESCRIPTION: 13;
       readonly CAPICOM_PROPID_ACCESS_STATE: 14;
       readonly CAPICOM_PROPID_SIGNATURE_HASH: 15;
       readonly CAPICOM_PROPID_SMART_CARD_DATA: 16;
       readonly CAPICOM_PROPID_EFS: 17;
       readonly CAPICOM_PROPID_FORTEZZA_DATA: 18;
       readonly CAPICOM_PROPID_ARCHIVED: 19;
       readonly CAPICOM_PROPID_KEY_IDENTIFIER: 20;
       readonly CAPICOM_PROPID_AUTO_ENROLL: 21;
       readonly CAPICOM_PROPID_PUBKEY_ALG_PARA: 22;
       readonly CAPICOM_PROPID_CROSS_CERT_DIST_POINTS: 23;
       readonly CAPICOM_PROPID_ISSUER_PUBLIC_KEY_MD5_HASH: 24;
       readonly CAPICOM_PROPID_SUBJECT_PUBLIC_KEY_MD5_HASH: 25;
       readonly CAPICOM_PROPID_ENROLLMENT: 26;
       readonly CAPICOM_PROPID_DATE_STAMP: 27;
       readonly CAPICOM_PROPID_ISSUER_SERIAL_NUMBER_MD5_HASH: 28;
       readonly CAPICOM_PROPID_SUBJECT_NAME_MD5_HASH: 29;
       readonly CAPICOM_PROPID_EXTENDED_ERROR_INFO: 30;
       readonly CAPICOM_PROPID_RENEWAL: 64;
       readonly CAPICOM_PROPID_ARCHIVED_KEY_HASH: 65;
       readonly CAPICOM_PROPID_FIRST_RESERVED: 66;
       readonly CAPICOM_PROPID_LAST_RESERVED: 32767;
       readonly CAPICOM_PROPID_FIRST_USER: 32768;
       readonly CAPICOM_PROPID_LAST_USER: 65535;
    }

    interface OIDPlugin {
       readonly CAPICOM_OID_OTHER: 0;
       readonly CAPICOM_OID_KEY_USAGE_EXTENSION: 10;
    }

    interface CAPICOM_OID extends OIDPlugin {
       readonly CAPICOM_OID_AUTHORITY_KEY_IDENTIFIER_EXTENSION: 1;
       readonly CAPICOM_OID_KEY_ATTRIBUTES_EXTENSION: 2;
       readonly CAPICOM_OID_CERT_POLICIES_95_EXTENSION: 3;
       readonly CAPICOM_OID_KEY_USAGE_RESTRICTION_EXTENSION: 4;
       readonly CAPICOM_OID_LEGACY_POLICY_MAPPINGS_EXTENSION: 5;
       readonly CAPICOM_OID_SUBJECT_ALT_NAME_EXTENSION: 6;
       readonly CAPICOM_OID_ISSUER_ALT_NAME_EXTENSION: 7;
       readonly CAPICOM_OID_BASIC_CONSTRAINTS_EXTENSION: 8;
       readonly CAPICOM_OID_SUBJECT_KEY_IDENTIFIER_EXTENSION: 9;
       readonly CAPICOM_OID_PRIVATEKEY_USAGE_PERIOD_EXTENSION: 11;
       readonly CAPICOM_OID_SUBJECT_ALT_NAME2_EXTENSION: 12;
       readonly CAPICOM_OID_ISSUER_ALT_NAME2_EXTENSION: 13;
       readonly CAPICOM_OID_BASIC_CONSTRAINTS2_EXTENSION: 14;
       readonly CAPICOM_OID_NAME_CONSTRAINTS_EXTENSION: 15;
       readonly CAPICOM_OID_CRL_DIST_POINTS_EXTENSION: 16;
       readonly CAPICOM_OID_CERT_POLICIES_EXTENSION: 17;
       readonly CAPICOM_OID_POLICY_MAPPINGS_EXTENSION: 18;
       readonly CAPICOM_OID_AUTHORITY_KEY_IDENTIFIER2_EXTENSION: 19;
       readonly CAPICOM_OID_POLICY_CONSTRAINTS_EXTENSION: 20;
       readonly CAPICOM_OID_ENHANCED_KEY_USAGE_EXTENSION: 21;
       readonly CAPICOM_OID_CERTIFICATE_TEMPLATE_EXTENSION: 22;
       readonly CAPICOM_OID_APPLICATION_CERT_POLICIES_EXTENSION: 23;
       readonly CAPICOM_OID_APPLICATION_POLICY_MAPPINGS_EXTENSION: 24;
       readonly CAPICOM_OID_APPLICATION_POLICY_CONSTRAINTS_EXTENSION: 25;
       readonly CAPICOM_OID_AUTHORITY_INFO_ACCESS_EXTENSION: 26;
       readonly CAPICOM_OID_SERVER_AUTH_EKU: 100;
       readonly CAPICOM_OID_CLIENT_AUTH_EKU: 101;
       readonly CAPICOM_OID_CODE_SIGNING_EKU: 102;
       readonly CAPICOM_OID_EMAIL_PROTECTION_EKU: 103;
       readonly CAPICOM_OID_IPSEC_END_SYSTEM_EKU: 104;
       readonly CAPICOM_OID_IPSEC_TUNNEL_EKU: 105;
       readonly CAPICOM_OID_IPSEC_USER_EKU: 106;
       readonly CAPICOM_OID_TIME_STAMPING_EKU: 107;
       readonly CAPICOM_OID_CTL_USAGE_SIGNING_EKU: 108;
       readonly CAPICOM_OID_TIME_STAMP_SIGNING_EKU: 109;
       readonly CAPICOM_OID_SERVER_GATED_CRYPTO_EKU: 110;
       readonly CAPICOM_OID_ENCRYPTING_FILE_SYSTEM_EKU: 111;
       readonly CAPICOM_OID_EFS_RECOVERY_EKU: 112;
       readonly CAPICOM_OID_WHQL_CRYPTO_EKU: 113;
       readonly CAPICOM_OID_NT5_CRYPTO_EKU: 114;
       readonly CAPICOM_OID_OEM_WHQL_CRYPTO_EKU: 115;
       readonly CAPICOM_OID_EMBEDED_NT_CRYPTO_EKU: 116;
       readonly CAPICOM_OID_ROOT_LIST_SIGNER_EKU: 117;
       readonly CAPICOM_OID_QUALIFIED_SUBORDINATION_EKU: 118;
       readonly CAPICOM_OID_KEY_RECOVERY_EKU: 119;
       readonly CAPICOM_OID_DIGITAL_RIGHTS_EKU: 120;
       readonly CAPICOM_OID_LICENSES_EKU: 121;
       readonly CAPICOM_OID_LICENSE_SERVER_EKU: 122;
       readonly CAPICOM_OID_SMART_CARD_LOGON_EKU: 123;
       readonly CAPICOM_OID_PKIX_POLICY_QUALIFIER_CPS: 124;
       readonly CAPICOM_OID_PKIX_POLICY_QUALIFIER_USERNOTICE: 125;
    }

    interface EKUPlugin {
       readonly CAPICOM_EKU_OTHER: 0;
       readonly CAPICOM_EKU_CLIENT_AUTH: 2;
       readonly CAPICOM_EKU_SMARTCARD_LOGON: 5;
    }

    interface CAPICOM_EKU {
       readonly CAPICOM_EKU_SERVER_AUTH: 1;
       readonly CAPICOM_EKU_CODE_SIGNING: 3;
       readonly CAPICOM_EKU_EMAIL_PROTECTION: 4;
       readonly CAPICOM_EKU_ENCRYPTING_FILE_SYSTEM: 6;
    }

    interface CAPICOM_ATTRIBUTE {
       readonly CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME: 0;
       readonly CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME: 1;
       readonly CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION: 2;
    }

    interface CAPICOM_HASH_ALGORITHM {
       readonly CAPICOM_HASH_ALGORITHM_SHA1: 0;
       readonly CAPICOM_HASH_ALGORITHM_MD2: 1;
       readonly CAPICOM_HASH_ALGORITHM_MD4: 2;
       readonly CAPICOM_HASH_ALGORITHM_MD5: 3;
       readonly CAPICOM_HASH_ALGORITHM_SHA_256: 4;
       readonly CAPICOM_HASH_ALGORITHM_SHA_384: 5;
       readonly CAPICOM_HASH_ALGORITHM_SHA_512: 6;
    }

    interface CAPICOM_ENCODING_TYPE {
       readonly CAPICOM_ENCODE_ANY: -1;
       readonly CAPICOM_ENCODE_BASE64: 0;
       readonly CAPICOM_ENCODE_BINARY: 1;
    }
}
