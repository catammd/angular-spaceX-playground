interface CoreInterface {
  core_serial: string;
  flight: number;
  block?: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success?: boolean;
  landing_intent: boolean;
  landing_type?: string;
  landing_vehicle?: string;
}

interface OrbitParamsInterface {
  reference_system: string;
  regime: string;
  longitude?: number;
  semi_major_axis_km?: number;
  eccentricity?: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min?: number;
  lifespan_years?: number;
  epoch?: string;
  mean_motion?: number;
  raan?: number;
  arg_of_pericenter?: number;
  mean_anomaly?: number;
}

interface PayloadInterface {
  payload_id?: string;
  cap_serial?: string;
  norad_id?: number[];
  reused?: boolean;
  customers?: string[];
  nationality?: string;
  manufacturer?: string;
  payload_type?: string;
  payload_mass_kg?: number;
  payload_mass_lbs?: number;
  orbit?: string;
  orbit_params?: OrbitParamsInterface;
  mass_returned_kg?: number;
  mass_returned_lbs?: number;
  flight_time_sec?: number;
  cargo_manifest?: string;
}

interface FirstStageInterface {
  cores: Array<CoreInterface>;
}

interface SecondStageInterface {
  block: number;
  payloads?: Array<PayloadInterface>;
}

interface FairingsInterface {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship?: string;
}

interface TelemetryInterface {
  flight_club: string;
}

interface LaunchSiteInterface {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface LaunchFailureInterface {
  time: number;
  altitude?: number;
  reason: string;
}

interface PatchInterface {
  small: string;
  large: string;
}

interface LinksInterface {
  patch: PatchInterface;
  campaign?: string;
  reddit?: string;
  launch?: string;
  recovery?: string;
  media?: string;
  presskit?: string;
  article: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: string[];
}

interface TimelineInterface {
  webcast_liftoff?: number;
  webcast_launch?: number;
  go_for_prop_loading?: number;
  rp1_loading?: number;
  stage1_lox_loading?: number;
  stage2_lox_loading?: number;
  engine_chill?: number;
  prelaunch_checks?: number;
  propellant_pressurization?: number;
  go_for_launch?: number;
  ignition?: number;
  liftoff?: number;
  maxq?: number;
  meco?: number;
  beco?: number;
  side_core_sep?: number;
  side_core_boostback?: number;
  center_stage_sep?: number;
  center_core_boostback?: number;
  side_core_entry_burn?: number;
  center_core_entry_burn?: number;
  side_core_landing?: number;
  center_core_landing?: number;
  stage_sep?: number;
  second_stage_ignition?: number;
  fairing_deploy?: number;
  first_stage_boostback_burn?: number;
  first_stage_entry_burn?: number;
  first_stage_landing?: number;
  'seco-1'?: number;
  second_stage_restart?: number;
  'seco-2'?: number;
  dragon_separation?: number;
  dragon_solar_deploy?: number;
  dragon_bay_door_deploy?: number;
  payload_deploy?: number;
  payload_deploy_1?: number;
  payload_deploy_2?: number;
}

interface RocketInterface {
  rocket_id?: string;
  rocket_name?: string;
  rocket_type?: string;
  first_stage: FirstStageInterface;
  second_stage: SecondStageInterface;
  fairings: FairingsInterface;
}

export interface LaunchInterface {
  flight_number: number;
  name: string;
  id?: string[];
  upcoming?: boolean;
  launch_year?: string;
  date_unix?: number;
  date_utc?: string;
  date_local?: string;
  is_tentative?: boolean;
  tentative_max_precision?: string;
  tbd?: boolean;
  launch_window?: number;
  rocket: RocketInterface;
  ships: string[];
  telemetry: TelemetryInterface;
  launch_site: LaunchSiteInterface;
  success: boolean;
  launch_failure_details?: LaunchFailureInterface;
  links?: LinksInterface;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: TimelineInterface;
}
