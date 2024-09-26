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
  subdivisionStatusCode: "ACTIVE" | "FUTURE" | "BUILT OUT";
  surveyMethodCode: string;
  county: string;
  community: string | null;
  zoom17Date: string;
  zoom18Date: string;
  subdivisionGeometryId: number | null;
  subdivisionGeometryIntelligenceBoundaryId: number | null;
  subdivisionGeometryIntelligenceBoundaryStatusCode: string;
  nearMapImageDate: string;
}
