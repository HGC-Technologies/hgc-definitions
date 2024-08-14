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
    }>
}

interface TableEntries {
    tableName: string,
    recordCount: number
}
export interface IPDFLargeTablesData {
    maxDisplayedRecords: number;
    largeTableThreshold: number;
    largeTables: Array<TableEntries>
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
    }>
}

export interface ReportThreeMonthData {
    ReportQueries3Month: Array<{
      url: string;
      reportName: string;
      table: string;
      query: string;
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
        execTimeInMS: number;
        query: string;
        hhmmss: string;
    }>;
}

export interface IPDFSlowScriptsData {
    execTimeThresholdMS: number;
    maxDisplayedRecords: number;
    slowScripts: Array<{
      label: string;
      avgExecTimeInMS: number;
    }>;
  }
  
  export interface IPDSyschoiceAnalyzerData {

    syschoiceQueries: Array<{
      url:string,
      counts: string,
      element: string,
      tableName:string
    }>;
  }