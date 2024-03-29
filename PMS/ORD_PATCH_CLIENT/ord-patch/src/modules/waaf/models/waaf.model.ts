// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Tunnels {
    data: Datum[];
}

export interface Datum {
    [uid: string]: any;
    type:               DatumType;
    driver:             null;
    secondaryTunnels:   any[];
    appliance:          Appliance;
    name:               string;
    reverseProxy:       Appliance;
    workflow:           Appliance;
    workflowParameters: WorkflowParameter[];
    focusTable:         null;
    enabled:            boolean;
    labels:             Appliance[];
    network:            Network;
    advanced:           Advanced;
    logs:               Logs;
    monitor:            Monitor;
    performance:        Performance;
    uid:                string;
    tUpdate:            number;
    tCreate?:           number;
}

export interface Advanced {
    advancedParameters:               Appliance | null;
    workflowBody:                     boolean;
    workflowUrlDecodeBodyPlusAsSpace: boolean;
    geoIpEnabled:                     boolean;
    limitRequestBody:                 number;
    priority:                         number;
}

export interface Appliance {
    uid:  string;
    name: string;
}

export interface Logs {
    debug:    boolean;
    filter:   Appliance | null;
    access:   Access;
    realtime: Realtime;
}

export interface Access {
    file:              boolean;
    database:          boolean;
    fileFormatProfile: null;
}

export interface Realtime {
    security:                  boolean;
    securityFormat:            Format;
    wam:                       boolean;
    wamFormat:                 Format;
    error:                     boolean;
    access:                    boolean;
    syslogDestinationProfiles: Appliance[];
}

export enum Format {
    JSON = "json",
}

export interface Monitor {
    enabled: boolean;
    backend: Backend;
}

export interface Backend {
    enabled:    boolean;
    method:     Method;
    url:        URL;
    httpHost:   string;
    frequency:  number;
    timeout:    number | null;
    returnCode: ReturnCode;
    match:      string;
}

export enum Method {
    Empty = "",
    Head = "head",
}

export enum ReturnCode {
    Empty = "",
    The5 = "!5**",
    The500 = "!500",
}

export enum URL {
    Empty = "/",
    URL = "",
}

export interface Network {
    incoming: Incoming;
    outgoing: Outgoing;
}

export interface Incoming {
    incomingType: IncomingType;
    serverName:   string;
    ssl:          IncomingSSL;
    serverAlias:  string[];
    http2Enabled: boolean;
    port:         number;
    vip:          Interface;
    interface:    Interface;
}

export enum IncomingType {
    Vip = "vip",
}

export interface Interface {
    uid:  Uid | null;
    name: IP | null;
    ip:   IP | null;
}

export enum IP {
    The1721720275 = "172.17.202.75",
    The1721720276 = "172.17.202.76",
    The1721720279 = "172.17.202.79",
}

export enum Uid {
    Ka2Ad15Cdf1Fd97E81Fb2Ce58Dbf6016 = "ka2ad15cdf1fd97e81fb2ce58dbf6016",
    Q2Ac0C54D45Cb9B5846F75C8C2E137Ce = "q2ac0c54d45cb9b5846f75c8c2e137ce",
    The09B0B2B2Ef28629B5E7F70A52Fe68F8A = "09b0b2b2ef28629b5e7f70a52fe68f8a",
}

export interface IncomingSSL {
    profile:                 Appliance | null;
    certificate:             Appliance | null;
    sniVhostCheck:           boolean;
    verifyClientCertificate: VerifyClientCertificate;
}

export interface VerifyClientCertificate {
    bundle:               null;
    ca:                   null;
    depth:                null;
    type:                 string;
    ocsp:                 null;
    catchErrors:          boolean;
    legacyDNStringFormat: boolean;
    SSLRedirectEnable:    boolean;
    SSLRedirectPortIn?:   number;
}

export interface Outgoing {
    address:          string;
    port:             number;
    ssl:              OutgoingSSL;
    loadBalancer:     null;
    poolingInterface: null;
    poolingPort:      null;
}

export interface OutgoingSSL {
    profile:                  Appliance | null;
    certificate:              null;
    verifyBackendCertificate: VerifyBackendCertificate;
}

export interface VerifyBackendCertificate {
    bundle:               null;
    depth:                null;
    type:                 VerifyBackendCertificateType;
    proxyCheckPeerCN:     boolean;
    proxyCheckPeerName:   boolean;
    proxyCheckPeerExpire: boolean;
}

export enum VerifyBackendCertificateType {
    Require = "require",
}

export interface Performance {
    timeout:                 null;
    keepAliveTimeout:        null;
    proxyTimeout:            number | null;
    workflowPreserveDeflate: boolean;
    ramdiskCache:            RamdiskCache;
    requestTimeoutProfile:   null;
    compressionProfile:      null;
}

export interface RamdiskCache {
    profile:      null;
    enabledUrls:  null;
    disabledUrls: null;
}

export enum DatumType {
    Default = "default",
    VrrpClone = "vrrpClone",
}

export interface WorkflowParameter {
    name:  Name;
    value: string;
}

export enum Name {
    Icx = "icx",
    MaintenanceEnable = "maintenance.enable",
    Securityexception = "securityexception",
}
