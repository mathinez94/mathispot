import React from 'react'
import './LivescoreLive.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { InfinitySpin } from 'react-loader-spinner'

export const LivescoreLive = () => {
  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
    params: {
      Category: 'soccer',
      Timezone: '-7'
    },
    headers: {
      'X-RapidAPI-Key': '90f1f5611cmsh71a35539b7795f8p1e0ac0jsn17117842c2cb',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };
  
  const dataFetcher = () => {
    return  axios.request(options);
  }
  const  { isLoading, data } = useQuery("live", dataFetcher);
  console.log(data?.data.Stages)

  if(isLoading){
    return <div className='loader'><h2>Loading</h2><InfinitySpin 
    width='200'
    color="#f9f9f9"
  /> </div>
  }
  
 
  return (
      <div className='LivescoreLive'>
          {
            data?.data.Stages.map(liveMatches => {
              return <div className="liveMatchesContainer" key={liveMatches.Events.Sid}>
                <div className='liveMatchesContent'>
                  <div className="competitionNames">
                    <span className='competitionGroup'>{liveMatches.Cnm}</span>:
                    <span className='competitionGroup'>{liveMatches.Snm}</span>
                  </div>
                  <div className="events">
                      <div className="matchStatus">
                        {liveMatches.Events[0].Eps === 'NS' ? <span>{liveMatches.Events[0].Esd}</span> : <span>{liveMatches.Events[0].Eps}</span>}
                      </div>
                      <div className="matchDetails">
                        <div className="liveScoreTeamnames">
                          <span className="teamName">{liveMatches.Events[0].T1[0].Nm}</span>
                        </div>
                          <div className="scores">
                              <div className="liveScoreScores">
                                <span>{liveMatches.Events[0].Tr1}</span>
                                <span>-</span>
                                <span>{liveMatches.Events[0].Tr2}</span>
                              </div>
                          </div>
                        
                        <div className="liveScoreTeamnames">
                          <span className="teamName">{liveMatches.Events[0].T2[0].Nm}</span>
                        </div>
                      </div>
                      
                  </div>
                 
                </div>
              </div>
            })
          }
      </div>
  )
}




// Field meaning
// BasicMatchesParser
// COMPETITION_DESCRIPTION = “CompD”;
// COMPETITION_ID = “CompId”;
// COMPETITION_NAME = “CompN”;
// COMPETITION_SUB_TITLE = “CompST”;
// COUNTRY_CODE = “Ccd”;
// COUNTRY_ID = “Cid”;
// COUNTRY_NAME = “Cnm”;
// EVENTS = “Events”;
// IS_CUP = “Scu”;
// LEAGUE_NAME = “Snm”;
// STAGE_CODE = “Scd”;
// STAGE_ID_V2 = “Sid”;
// STAGE_NAME = “Snm”;

// BasicMatchParser
// AWAY_TEAM = “T2”;
// HOME_TEAM = “T1”;
// AWAY_SCORE = “Tr2”;
// HOME_SCORE = “Tr1”;
// MATCH_ADVANCING_TO_NEXT_ROUND = “Awt”;
// MATCH_COVERAGE_ID = “Ecov”;
// MATCH_END_DATE = “Edf”;
// MATCH_IDS = “Pids”;
// MATCH_INFO_PROPERTIES = “EO”;
// MATCH_IS_HIDDEN = “Ehid”;
// MATCH_LEAGUE_IDS = “Sids”;
// MATCH_START_DATE = “Esd”;
// MATCH_STATUS_ID = “Esid”;
// MATCH_STATUS = “Eps”;
// MATCH_TEAM_ID = “Eid”;
// OVERALL_STATUS = “Epr”;
// WHICH_TEAM_WON = “Ewt”;

// BasicParticipantParser
// BADGE_ID = “Img”;
// COUNTRY_NAME = “CoNm”;
// GENDER = “Gd”;
// HAS_VIDEO = “HasVideo”;
// ID = “ID”;
// IS_VIRTUAL = “tbd”;
// NAME = “Nm”;
// NEWS_TAG = “NewsTag”;
// PROVIDERS_IDS = “Pids”;

// BasicPlayersParser
// COUNTRY_IMAGE = “RegImg”;
// PLAYERS = “Prns”;
// PLAYER_ACTUAL_POSITION = “PosA”;
// PLAYER_COUNTRY = “CoNm”;
// PLAYER_EXTERNAL_ID = “Pid”;
// PLAYER_FIRST_NAME = “Fn”;
// PLAYER_FULL_NAME = “Shnm”;
// PLAYER_ID = “Aid”;
// PLAYER_LAST_NAME = “Ln”;
// PLAYER_NUMBER = “Snu”;
// PLAYER_POSITION = “Pos”;
// PLAYER_STATUS = “Rt”;
// PLAYER_STATUS_REASON = “Rs”;
// RETURN_INFO = “RtonS”;
// RETURN_INFO_LONG = “Rton”;

// BasketBasicMatchParser
// MATCH_INFO_PROPERTIES = “EO”;
// PERIOD_FIRST = “Tr1Pe1”;
// QUARTER = “Tr1Q1”;

// CompetitionFixturesParser
// COMPETITION_DESCRIPTION = “CompD”;
// COMPETITION_ID = “CompId”;
// COMPETITION_NAME = “CompN”;
// COUNTRY_CODE = “Ccd”;
// EVENTS = “Events”;
// HAS_STAT = “HasStat”;
// HAS_TEAM_STAT = “HasTStat”;
// IS_CUP = “Scu”;
// MEDIA_ID = “MediaId”;
// NEWS_ID = “NewsId”;
// STAGES = “Stages”;
// STAGE_ID = “Sid”;
// STAGE = “Stg”;
// STAGE_NAME = “Snm”;

// CompetitionStatsParser
// PLAYERS_LIST = “Plrs”;
// PLAYER_NAME = “Pnm”;
// PLAYER_POINTS_LIST = “Scrs”;
// PLAYER_RANK = “Rnk”;
// PLAYER_TEAM_BADGE = “Img”;
// PLAYER_TEAM_ID = “Tid”;
// PLAYER_TEAM_NAME = “Tnm”;
// STATS_LIST = “Stat”;
// TYPE_OF_STAT = “Typ”;

// CricketBasicMatchParser
// HOME_POINTS = {“Tr1C1”, “Tr1C2”};
// AWAY_POINTS = {“Tr2C1”, “Tr2C2”};
// HOME_OVERS = {“Tr1CO1”, “Tr1CO2”};
// AWAY_OVERS = {“Tr2CO1”, “Tr2CO2”};
// HOME_WICKETS = {“Tr1CW1”, “Tr1CW2”};
// AWAY_WICKETS = {“Tr2CW1”, “Tr2CW2”};
// HOME_CLOSED_INNINGS = {“Tr1CD1”, “Tr1CD2”};
// AWAY_CLOSED_INNINGS = {“Tr2CD1”, “Tr2CD2”};
// HOME_BALLS = {“Tr1BS1”, “Tr1BS2”};
// AWAY_BALLS = {“Tr2BS1”, “Tr2BS2”};

// FavoriteStagesParser
// COMPETITION_DESCRIPTION = “CompD”;
// COMPETITION_ID = “CompId”;
// COMPETITION_NAME = “CompN”;
// COMPETITION_SUB_TITLE = “CompST”;
// COUNTRY_ID = “Cid”;
// IS_CUP = “Scu”;
// STAGES_NAME = “Stages”;
// STAGE_CODE = “Scd”;
// STAGE_CODE = “Ccd”;
// STAGE_HIDDEN = “Shi”;
// STAGE_ID = “Sid2”;
// STAGE_ID_V2 = “Sid”;
// STAGE = “Ccg”;
// STAGE_NAME = “Sdn”;
// STAGE_NAME = “Cnm”;

// FavoriteTeamsParser
// PROVIDER_TEAM_ID = 8;
// TEAMS = “Teams”;
// TEAM_BADGE_ID = “Img”;
// TEAM_COUNTRY_ID = “CoId”;
// TEAM_COUNTRY_NAME = “CoNm”;
// TEAM_ID = “ID”;
// TEAM_IS_VIRTUAL = “tbd”;
// TEAM_NAME = “Nm”;

// FixturesParser
// EVENTS = “Events”;
// NUMBER_OF_PARTICIPANTS = “Spps”;

// HockeyBasicMatchParser
// AWAY_PENALTY_SCORE = “Trp2”;
// HOME_PENALTY_SCORE = “Trp1”;
// MATCH_INFO_PROPERTIES = “EO”;
// PERIOD_SCORE = “Tr2Pe1”;

// HorseRacingBasicMatchParser
// DISQUALIFIED = “Dq”;
// DISTANCE = “RaDis”;
// FAILED_TO_FINISH = “FtF”;
// FAVORITE_HORSE = 1;
// FAVORITE_HORSE = “F”;
// FINISH_POSITION = “FiPos”;
// FORM = “L10”;
// HORSE_NAME = “Nm”;
// HORSE_NUMBER = “TaN”;
// HORSE_STATE = “HoSt”;
// JOCKEY_NAME = “Jo”;
// NUMBER_OF_PLACES = “NbPs”;
// PARTICIPANTS = “Ps”;
// PARTICIPANT_IDS = “Pids”;
// RACE_TYPE = “RaGa”;
// SILK_ID = “Img”;
// STARTING_PRICE = “StPr”;
// TRACK_CONDITIONS = “TrCon”;
// TRAINER_NAME = “Tr”;

// IncidentParser
// INCIDENTS = “Incs”;
// INCIDENT_ID = “ID”;
// INCIDENT_INTERNAL_PLAYER_ID = “Aid”;
// INCIDENT_REASON = “IR”;
// INCIDENT_TYPE = “IT”;
// MINUTE_EXTENDED = “MinEx”;
// MINUTE = “Min”;
// NUMBER = “Nm”;
// PLAYER_NAME = “Pn”;
// PLAYER_POSITION_ACTUAL = “PosA”;
// SCORES = “Sc”;
// SECOND = “Sec”;

// LeaguesSearchParser
// COMPETITION_DESCRIPTION = “CompD”;
// COMPETITION_ID = “CompId”;
// COMPETITION_NAME = “CompN”;
// COUNTRY_ID = “Cid”;
// FLAG_CODE = “Ccd”;
// IS_CUP = “Scu”;
// STAGES = “Stages”;
// STAGE_CODE = “Scd”;
// STAGE_HIDDEN = “Shi”;
// STAGE_ID = “Sid2”;
// STAGE_ID_V2 = “Sid”;
// STAGE_NAME = “Snm”;
// STAGE_NAME = “Cnm”;

// LineupsPlayersParser
// LINEUPS = “Lu”;
// PARTICIPANTS = “Ps”;

// LiveStageMatchesCounterEnvParser
// CATEGORY = “Ccg”;

// RacesParser
// COUNTRY_CODE = “Ccd”;
// COUNTRY_ID = “Cid”;
// COUNTRY_NAME = “Cnm”;

// SoccerBasicMatchParser
// EXTRA_TIME = “Tr1ET”;
// HALF_TIME = “Trh1”;
// AWAY_PENALTY_SCORE = “Trp2”;
// HOME_PENALTY_SCORE = “Trp1”;
// MATCH_INFO_PROPERTIES = “EO”;
// PENALTY = “Trp1”;

// StageParser
// COMPETITION_DESCRIPTION = “CompD”;
// COMPETITION_ID = “CompId”;
// COMPETITION_NAME = “CompN”;
// COMPETITION_SUB_TITLE = “CompST”;
// COUNTRY_CODE = “Ccd”;
// COUNTRY_NAME = “Cnm”;
// HIDDEN_STAGE = “Chi”;
// IS_CUP = “Scu”;
// LEAGUE_NAME = “Snm”;
// STAGE_CODE = “Scd”;
// STAGE_CODE = “Cid”;
// STAGE_EXTERNAL_ID = “ExSid”;
// STAGE_ID = “Sid”;
// STAGE = “Ccg”;
// STAGE_NAME = “Cnm”;

// TeamFixturesParser
// BADGE_ID_TAG = “Img”;
// COUNTRY_ID_TAG = “CoId”;
// COUNTRY_NAME_TAG = “CoNm”;
// HAS_SQUADS = “HasSquad”;
// HAS_VIDEO = “HasVideo”;
// NEWS_TAG = “NewsTag”;
// STAGES = “Stages”;
// STAT = “StatS”;
// TEAM_ID = “ID”;
// TEAM_NAME = “Nm”;

// TeamOverviewNextMatchParser
// AWAY_TEAM = “T2”;
// EVENT = “Event”;
// EVENT_LIST = “EL”;
// FORM = “Form”;
// HOME_TEAM = “T1”;
// TEAM_ID = “ID”;

// TeamsSquadParser
// PLAYERS = “Ps”;

// TeamStatisticParser
// BADGE = “Img”;
// COUNTRY_NAME = “Conm”;
// PARTICIPANT_ID = “Pid”;
// PARTICIPANT_NAME = “Pnm”;
// STATS_GROUP = “statsGroup”;
// STATS_GROUP_NAME = “name”;
// STATS_ITEMS = “stats”;
// STATS_ITEM_NAME = “name”;
// STATS_ITEM_PER_GAME_VALUE = “pgValue”;
// STATS_ITEM_RANK = “rank”;
// STATS_ITEM_TOTAL_VALUE = “totalValue”;

// TeamStatsParser
// POINTS_LIST = “Scrs”;
// POINTS_PER_COMPETITION = “Ttl”;
// POINTS_PER_GAME = “PrGm”;
// RANK = “Rnk”;
// STATS_LIST = “Stat”;
// TEAMS_LIST = “Tids”;
// TEAM_BADGE = “Img”;
// TEAM_ID = “Tid”;
// TEAM_NAME = “Tnm”;
// TYPE_OF_STAT = “Typ”;

// TennisBasicMatchParser
// CURRENT_AWAY_GAME_POINT = “Tr2G”;
// CURRENT_HOME_GAME_POINT = “Tr1G”;
// MATCH_INFO_PROPERTIES = “EO”;
// ON_SERV = “Esrv”;
// TYPE_OF_MATCH = “Et”;
// TOTAL_HOME_SCORES = {“Tr1S1”, “Tr1S2”, “Tr1S3”, “Tr1S4”, “Tr1S5”};
// TOTAL_AWAY_SCORES = {“Tr2S1”, “Tr2S2”, “Tr2S3”, “Tr2S4”, “Tr2S5”};
// TOTAL_HOME_TIEBREAK_SCORES = {“Tr1S1T”, “Tr1S2T”, “Tr1S3T”, “Tr1S4T”, “Tr1S5T”};
// TOTAL_AWAY_TIEBREAK_SCORES = {“Tr2S1T”, “Tr2S2T”, “Tr2S3T”, “Tr2S4T”, “Tr2S5T”};

// BasketDetailMatchDecorator
// AWAY_SCORE_OVERTIME = “Tr2OT”;
// AWAY_SCORE_PERIOD_FIRST = “Tr2Pe1”;
// AWAY_SCORE_PERIOD_SECOND = “Tr2Pe2”;
// AWAY_SCORE_QUARTER_FIRST = “Tr2Q1”;
// AWAY_SCORE_QUARTER_FOURTH = “Tr2Q4”;
// AWAY_SCORE_QUARTER_SECOND = “Tr2Q2”;
// AWAY_SCORE_QUARTER_THIRD = “Tr2Q3”;
// AWAY_SCORE_TOTAL = “Tr2”;
// HOME_SCORE_OVERTIME = “Tr1OT”;
// HOME_SCORE_PERIOD_FIRST = “Tr1Pe1”;
// HOME_SCORE_PERIOD_SECOND = “Tr1Pe2”;
// HOME_SCORE_QUARTER_FIRST = “Tr1Q1”;
// HOME_SCORE_QUARTER_FOURTH = “Tr1Q4”;
// HOME_SCORE_QUARTER_SECOND = “Tr1Q2”;
// HOME_SCORE_QUARTER_THIRD = “Tr1Q3”;
// HOME_SCORE_TOTAL = “Tr1”;

// CommentaryParser
// COMMENTARIES = “Com”;
// COMMENT = “Txt”;
// INJURY_TIME = “MinEx”;
// MINUTES = “Min”;
// TYPE_OF_INCIDENT = “IT”;

// LineUpsParser
// EVENT_ID = “Eid”;
// FORMAT_POSITION = “Fp”;
// INJURED_SUSPENDED = “IS”;
// LINEUPS = “Lu”;
// NAME = “Nm”;
// OTHER_PLAYER_ID = “IDo”;
// PLAYERS = “Ps”;
// PLAYER_NAME = “Pn”;
// STANDING_FORMATIONS = “Fo”;
// SUBSTITUTE_ID = “ID”;
// SUBSTITUTE_MINUTES = “Min”;
// SUBSTITUTE_TYPE = “IT”;
// SUBSTITUTIONS = “Subs”;
// TEAM_NUMBER = “Tnb”;

// LineUpsIncidentsParser
// INCIDENTS = “Incs”;
// INCIDENT_ID = “ID”;
// INCIDENT_TYPE = “IT”;

// LastNextMatchesParser
// AWAY_TEAM = “T2”;
// HOME_TEAM = “T1”;
// STAGE_NAME = “Scd”;

// HeadToHeadParser
// AWAY_TEAM = “T2”;
// AWAY_TEAM_SCORE = “Tr2”;
// COMPETITION_DESCRIPTION = “CompD”;
// COMPETITION_ID = “CompId”;
// COMPETITION_NAME = “CompN”;
// COMPETITION_SUB_TITLE = “CompST”;
// COUNTRY_CODE = “Ccd”;
// COUNTRY_NAME = “Cnm”;
// H2H_EVENTS = “H2H”;
// HOME_TEAM = “T1”;
// HOME_TEAM_SCORE = “Tr1”;
// IS_CUP = “Scu”;
// LEAGUE_NAME = “Snm”;
// MATCH_ID = “Eid”;
// MATCH_START_DATE = “Esd”;
// MATCH_STATUS_ID = “Esid”;
// MATCH_STATUS = “Eps”;
// OVERALL_STATUS = “Epr”;
// STAGE_EXTERNAL_ID = “ExSid”;
// STAGE_ID = “Sid”;
// STAGE = “Stg”;
// STAGE_NAME = “Scd”;
// TEAM_BADGE_ID = “Img”;
// TEAM_COUNTRY_NAME = “CoNm”;
// TEAM_ID = “ID”;
// TEAM_NAME = “Nm”;
// WHICH_TEAM_WON = “Ewt”;

// CricketTeamsParser
// LINEUPS_ARRAY = “Lu”;
// PLAYER_OBJECTS_ARRAY = “Ps”;
// TEAM_TYPE = “Tnb”;

// CommentaryParser
// COMMENTARIES = “Com”;
// COMMENT = “Txt”;
// INJURY_TIME = “MinEx”;
// MINUTES = “Min”;
// TYPE_OF_INCIDENT = “IT”;

// WatchParser
// DateTimeFormatter = “yyyyMMddHHmmss”;