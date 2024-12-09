export interface IPDFACLDBLookupData {
  name: string;
  id: string;
  description: string;
  URL: string;
}

export interface IPDFACLData {
  name: string;
  id: string;
  URL?: string;
  operation: string;
  description: string;
  groups?: Array<{
    type: string;
    name: string;
  }>,
  reasons?: Array<{
    reason: string
  }>
}

export interface IPDFBusyFormsData {
  formID: string;
  formName?: string;
  URL: string;
  view?: {
    viewId: string;
    viewName: string;
  }
  tableName?: string;
  totalElementCount: number;
  sections: Array<{
    sectionID: string;
    sectionName: string;
    elementCount: number;
    elementNames: Array<string>
  }>
}

export interface IPDFDuplicateFieldData {
  viewName: string;
  duplicateFields: Array<string>;
  table: string;
}

export interface IPDFDuplicateScriptIncludes {
  id: string,
  name: string,
  URL: string
}

export interface DuplicateUpdatesetData {
  DuplicateUpdatesetQueries: Array<{
    url: string;
    updatesetName: string;
    parent: string;
    parentURL: string;
    occurrence: number
  }>;
}

export interface IAttachmentStats {
  contentType: string,
  sizeMB: number,
  count: number
}

export interface ISoftwareLicenseInformation {
  id:string;
  name: string;
  state:string;
  licensesUsed: number;
  licensesAvailable: number;
  totalLicenses: number;
}

export interface IPDFBRScriptData {
  name: string;
  id: string;
  active: string;
  condition: string;
  URL: string;
}

export interface IPDFUIScriptData {
  name: string;
  id: string;
  active: string;
  description: string;
  URL: string;
}

export interface IPDFInstanceErrorData {
  errorTypes?: Array<{
    errorSource: string;
    errorCount: number;
    URL: string;
  }>
}

interface TableEntries {
  tableName: string,
  recordCount: number
  URL: string;
}
export interface IPDFLargeTablesData {
  maxDisplayedRecords: number;
  largeTableThreshold: number;
  largeTables: Array<TableEntries>;
}

interface ReportQueries {
  url: string;
  reportName: string;
  table: string;
  execTimeInMS: number;
  query: string;
  hhmmss: string;
}

export interface IPDFLongReportData {
  longReportThresholdMS: number;
  maxDisplayedRecords: number;
  totalQueries: number;
  longReportQueries: Array<ReportQueries>;
}

export interface IPDFLongTitlesData {
  longTitleStringLength: number;
  maxDisplayedRecords: number;
  totalRecords: number;
  affectedRecords: Array<{
    title: string;
    tableName: string;
    URL: string;
  }>;
}

export interface ReportThreeMonthData {
  ReportQueries3Month: Array<{
    url: string;
    reportName: string;
    table: string;
    query: string;
    created: string
  }>;
}

export interface ScriptIncludeData {

  totalQueries: number;
  scriptIncludeQueries: Array<{
    url: string;
    scriptIncludeName: string;
    sysId: string;
    clientCallable: boolean;
    active: boolean;

  }>;
}

export interface IPDFSlowQueryData {
  slowQueryThresholdMS: number;
  maxDisplayedRecords: number;
  totalQueries: number;
  slowQueries: Array<{
    url: string;
    execTimeInMS: number;
    query: string;
    hhmmss: string;
    count: number;
    lastRunDate: string;
  }>;
}

export interface IPDFSlowScriptsData {
  execTimeThresholdMS: number;
  maxDisplayedRecords: number;
  slowScripts: Array<{
    label: string;
    avgExecTimeInMS: number;
    URL: string;
    lastUpdateDate: string;
    lastRunDate: string;
    count: number;
  }>;
}

export interface IPDSyschoiceAnalyzerData {

  syschoiceQueries: Array<{
    url: string,
    counts: string,
    element: string,
    tableName: string
  }>;
}

export interface IPDAdminRoleData {
  name: string,
  email: string,
  url: string,
  lastLogin: string
}

export interface IJsonData {
  ACLDBLookupData?: IPDFACLDBLookupData[],
  ACLData?: IPDFACLData[],
  DuplicateFieldData?: IPDFDuplicateFieldData[],
  SlowQueryData?: IPDFSlowQueryData,
  LargeTablesData?: IPDFLargeTablesData,
  LongTitlesData?: IPDFLongTitlesData,
  GlobalUIScriptData?: IPDFUIScriptData[],
  BusyFormsData?: IPDFBusyFormsData[],
  SlowScriptsData?: IPDFSlowScriptsData,
  GlobalBRScriptData?: IPDFBRScriptData[],
  instanceErrorData?: IPDFInstanceErrorData,
  LongReportData?: IPDFLongReportData,
  DuplicateScriptIncludes?: IPDFDuplicateScriptIncludes[],
  ScriptIncludeData?: ScriptIncludeData,
  ReportsNotRunFor3MonthData?: ReportThreeMonthData,
  DuplicateUpdatesetData?: DuplicateUpdatesetData,
  syschoiceAnalyzerData?: IPDSyschoiceAnalyzerData,
  SAMReport?: IAggregatedSAMData[]
  RoleReport?: IPDAdminRoleData[],
  UnderUsedLicenses?: ILowUsageLicence[],
  AttachmentStats?: IAttachmentStats
}

export interface IAggregatedSAMData {
  softwareName: string;
  version: string;
  installationCount: number;
  complianceStatus: string;
  licenseExpiryDate: string;
  assignedUsersCount?: number;
  assignedDevicesCount?: number;
  totalCost?: number;
}

export interface ILowUsageLicence {
  moduleName: string,
  usagePercentage: string,
  recommendation?: string,
  expired?: boolean,
  totalLicenses?: number | null,
  totalUsed?: number | null,
  isUnderUsed?: boolean
  pool?: boolean,
  poolLicences?: any[]
}