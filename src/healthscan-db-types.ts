export enum ECategory {
    UX_UI = 1, 
    MANAGEABILITY = 2, 
    UPGRADABILITY = 3, 
    SECURITY = 4,
    PERFORMANCE = 5,
}
export const CategoryTitleMap: Record<ECategory, string> = {
    [ECategory.UX_UI]: "UX and UI",
    [ECategory.MANAGEABILITY]: "Manageability",
    [ECategory.UPGRADABILITY]: "Upgradability",
    [ECategory.SECURITY]: "Security",
    [ECategory.PERFORMANCE]: "Performance"
};

export enum EIssueType {
    SLOW_QUERIES = 1,
    LARGE_TABLES = 2,
    LONG_TITLES = 3,
    GLOBAL_UI_SCRIPTS = 4,
    ACL = 5,
    BUSY_FORMS = 6,
    SLOW_SCRIPTS = 7,
    DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES = 8,
    GLOBAL_BUSINESS_RULES = 9,
    INSTANCE_ERROR_LOGS = 10,
    LONG_RUNNING_REPORTS = 11,
    DUPLICATE_SCRIPT_INCLUDES = 12,
    DUPLICATE_FIELDS = 13,
    SCRIPT_INCLUDE_REPORTS = 14,
    TOO_MANY_CHOICES = 15,
};

export const IssueTypeTitleMap: Record<EIssueType, string> = {
    [EIssueType.SLOW_QUERIES]: "Slow Queries",
    [EIssueType.LARGE_TABLES]: "Large Tables",
    [EIssueType.LONG_TITLES]: "Long Titles",
    [EIssueType.GLOBAL_UI_SCRIPTS]: "Global UI Scripts",
    [EIssueType.ACL]: "ACLs",
    [EIssueType.BUSY_FORMS]: "Busy Forms",
    [EIssueType.SLOW_SCRIPTS]: "Slow Scripts",
    [EIssueType.DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES]: "Database Lookups in Access Control Rules",
    [EIssueType.GLOBAL_BUSINESS_RULES]: "Global Business Rules",
    [EIssueType.INSTANCE_ERROR_LOGS]: "Instance Error Logs",
    [EIssueType.LONG_RUNNING_REPORTS]: "Long Running Reports",
    [EIssueType.DUPLICATE_SCRIPT_INCLUDES]: "Deplicate Script Includes",
    [EIssueType.DUPLICATE_FIELDS]: "Duplicate Fields",
    [EIssueType.SCRIPT_INCLUDE_REPORTS]: "Script Includes Reports",
    [EIssueType.TOO_MANY_CHOICES]: "Too Many Choices"
};
