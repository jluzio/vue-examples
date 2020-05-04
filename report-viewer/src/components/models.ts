export interface Report {
  summary: Summary
  rendering: Rendering[]
}

export interface Rendering {
  document: null | string
  page: number | null
  uid: null | string
  start: string[]
  get: string[]
  details: RenderingDetails | undefined
}

export interface Summary {
  count: number
  duplicates: number
  unnecessary: number
}

export interface RenderingDetails {
  timestamp?: string
  starts?: string
  gets?: string
}

export enum ResourceStatus {
  UNDEFINED = 'UNDEFINED',
  PENDING = 'PENDING',
  DEFINED = 'DEFINED',
  ERROR = 'ERROR'
}
