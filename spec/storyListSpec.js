function StoryDouble(title, url, image) {
  this.title = title;
  this.url = url;
  this.image = image;
};

function testEmptyStoryList() {
  var storyList = new StoryList();
  assert.isTrue("Story list starts empty", storyList.storyArray[0] === undefined);
};

testEmptyStoryList();

function testStoryList() {
  var apiResponse = {"response":
    {
      "status":"ok","userTier":"developer","total":2045182,"startIndex":1,"pageSize":10,"currentPage":1,"pages":204519,"orderBy":"newest","results":
        [{"id":"sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "type":"liveblog",
        "sectionId":"sport",
        "sectionName":"Sport",
        "webPublicationDate":"2018-07-01T11:16:26Z",
        "webTitle":"NBA free agency: LeBron James decision imminent as Paul George re-signs with Thunder",
        "webUrl":"https://www.theguardian.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "apiUrl":"https://content.guardianapis.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "fields":
          {"thumbnail":"https://media.guim.co.uk/191b818a4971ed285a07b5ac97cbf2afadab6821/0_246_5568_3341/500.jpg"},
        "isHosted":false,
        "pillarId":"pillar/sport",
        "pillarName":"Sport"
        }]
      }
    };
  var title = apiResponse.response.results[0].webTitle;
  var url = apiResponse.response.results[0].webUrl;
  var image = apiResponse.response.results[0].fields.thumbnail;
  var storyList = new StoryList();
  storyList.addStory(apiResponse);
  assert.isTrue("Add one story to story list", storyList.storyArray[0].title === "NBA free agency: LeBron James decision imminent as Paul George re-signs with Thunder");
};

testStoryList();

function testStoryListWithTwoStories() {
  var apiResponse = {"response":
    {
      "status":"ok","userTier":"developer","total":2045182,"startIndex":1,"pageSize":10,"currentPage":1,"pages":204519,"orderBy":"newest","results":
        [{"id":"sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "type":"liveblog",
        "sectionId":"sport",
        "sectionName":"Sport",
        "webPublicationDate":"2018-07-01T11:16:26Z",
        "webTitle":"NBA free agency: LeBron James decision imminent as Paul George re-signs with Thunder",
        "webUrl":"https://www.theguardian.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "apiUrl":"https://content.guardianapis.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "fields":
          {"thumbnail":"https://media.guim.co.uk/191b818a4971ed285a07b5ac97cbf2afadab6821/0_246_5568_3341/500.jpg"},
        "isHosted":false,
        "pillarId":"pillar/sport",
        "pillarName":"Sport"
        },
        {
          "id":"football/live/2018/jul/01/world-cup-2018-messi-ronaldo-out-and-spain-v-russia-buildup-live",
          "type":"liveblog",
          "sectionId":"football",
          "sectionName":"Football",
          "webPublicationDate":"2018-07-01T11:13:50Z",
          "webTitle":"World Cup 2018: Messi, Ronaldo out and Spain v Russia buildup – live!",
          "webUrl":"https://www.theguardian.com/football/live/2018/jul/01/world-cup-2018-messi-ronaldo-out-and-spain-v-russia-buildup-live",
          "apiUrl":"https://content.guardianapis.com/football/live/2018/jul/01/world-cup-2018-messi-ronaldo-out-and-spain-v-russia-buildup-live",
          "fields":
            {"thumbnail":"https://media.guim.co.uk/ed7d9eee067c8190f9373e76bfb45964e2da1079/0_95_3120_1873/500.jpg"},
          "isHosted":false,
          "pillarId":"pillar/sport",
          "pillarName":"Sport"
        }]
      }
    };
  var title = apiResponse.response.results[0].webTitle;
  var url = apiResponse.response.results[0].webUrl;
  var image = apiResponse.response.results[0].fields.thumbnail;
  var storyList = new StoryList();
  storyList.addStory(apiResponse);
  assert.isTrue("Add first of two stories to story list", storyList.storyArray[0].title === "NBA free agency: LeBron James decision imminent as Paul George re-signs with Thunder");
  assert.isTrue("Add second of two stories to story list", storyList.storyArray[1].title ==="World Cup 2018: Messi, Ronaldo out and Spain v Russia buildup – live!");
};

testStoryListWithTwoStories();
