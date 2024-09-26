export type SubdivisionStatusCode = "Active" | "Future" | "BUILT OUT";

export interface Subdivision {
  id: number;
  code: string;
  name: string;
  longitude: number;
  latitude: number;
  fieldSurveyTerritoryId: number;
  marketId: number;
  subdivisionStatusId: number;
  surveyMethodId: number;
  activeSections: number;
  futureSections: number;
  builtOutSections: number;
  totalLots: number;
  fieldSurveyTerritoryName: string;
  marketName: string;
  marketAbbreviation: string;
  subdivisionStatusCode: SubdivisionStatusCode;
  surveyMethodCode: string;
  subdivisionGeometryBoundingBoxId: string | null;
  subdivisionGeometryBoundaryId: number | null;
  subdivisionGeometryIntelligenceBoundaryStatusId: number;
  subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string;
  imageBoxId: number | null;
  mostRecentIPointBatchDate: string | null;
  iPoints: string | null;
  validatediPoints: string | null;
  subdivisionSpecificStatus: string;
  county: string;
  community: string | null;
  zoom17Date: string;
  zoom18Date: string;
  subdivisionGeometryId: number | null;
  subdivisionGeometryIntelligenceBoundaryId: number | null;
  subdivisionGeometryIntelligenceBoundaryStatusCode: string;
  nearMapImageDate: string;
}
