const loader_img = document.getElementById("loaderImg");
const loaderOverlay_div = document.getElementById("loaderOverlayDiv");

// <wpm-statistics>
const toggleVisibilityWpmStatistics_button = document.getElementById("toggleViewWpmStatisticsButton");

const wpmStatistics_table = document.getElementById("wpmStatisticsTable");
const wpmLastGame_td = document.getElementById("wpmLastGameTableData");
const wpmLastTenGames_td = document.getElementById("wpmLastTenGamesTableData");
const wpmAverageToDate_td = document.getElementById("wpmAverageToDateTableData");
const wpmAllTimeBest_td = document.getElementById("wpmAllTimeBestTableData");
// </wpm-statistics>

// <accuracy-statistics>
const toggleVisibilityAccuracyStatistics_button = document.getElementById("toggleViewAccuracyStatisticsButton");

const accuracyStatistics_table = document.getElementById("accuracyStatisticsTable");
const accuracyLastGame_td = document.getElementById("accuracyLastGameTableData");
const accuracyLastTenGames_td = document.getElementById("accuracyLastTenGamesTableData");
const accuracyAverageToDate_td = document.getElementById("accuracyAverageToDateTableData");
const accuracyAllTimeBest_td = document.getElementById("accuracyAllTimeBestTableData");
// </accuracy-statistics>

// <participation-statistics>
const toggleVisibilityParticipationStatistics_button = document.getElementById("toggleViewParticipationStatisticsButton");

const participationStatistics_table = document.getElementById("participationStatisticsTable");
const playtime_td = document.getElementById("playtimeTableData");
const gamesCompleted_td = document.getElementById("gamesCompletedTableData");
const gamesAbandoned_td = document.getElementById("gamesAbandonedTableData");
const gamesDisqualified_td = document.getElementById("gamesDisqualifiedTableData");
const gamesCheated_td = document.getElementById("gamesCheatedTableData");
// </participation-statistics>

const clearStatisticsStorage_button = document.getElementById("clearStatisticsStorageButton");