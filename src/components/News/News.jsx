import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "Lakers sign veteran point guard Dennis Schroder to one-year deal for second stint with team - CBS Sports",
      description: "Schroder played for the Lakers during the 2020-21 season",
      url: "https://www.cbssports.com/nba/news/lakers-sign-veteran-point-guard-dennis-schroder-to-one-year-deal-for-second-stint-with-team/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2021/05/03/19e4c6cc-2f73-4221-9088-c2442ddfea81/thumbnail/1200x675/a536255eb05a1f700d3216ab82647111/schroder.jpg",
      publishedAt: "2022-09-17T01:04:00Z",
      content:
        "With the 2022-23 NBA season rapidly approaching, the Los Angeles Lakers have signed free agent point guard Dennis Schroder, the team announced on Friday. Our NBA Insider Bill Reiter confirms that the… [+2471 chars]",
    },
    {
      source: { id: null, name: "AnandTech" },
      author: "Ryan Smith",
      title:
        "EVGA and NVIDIA To Split: EVGA Won't Make Next-Gen NVIDIA Cards - AnandTech",
      description:
        "Keanu Reeves returning to the Constantine franchise, as revealed by Deadline earlier this afternoon, has thrown up some dust in the TV business. HBO Max has passed on the J.J. Abrams-exec produced television series version of Constantine, which was being writ…",
      url: "https://www.anandtech.com/show/17578/evga-and-nvidia-to-split-evga-wont-make-nextgen-nvidia-cards",
      urlToImage:
        "https://images.anandtech.com/doci/17578/EVGA_Box_678x452.jpg",
      publishedAt: "2022-09-17T01:00:00Z",
      content:
        "In a move that will have significant repercussions for the video card industry in North America and Europe, EVGA today has announced that the company is parting ways from NVIDIA. As a result, the com… [+13294 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Peter White",
      title:
        "J.J. Abrams’ ‘Constantine’ Series & ‘Madame X’ Will Be Shopped Elsewhere After HBO Max Passes - Deadline",
      description:
        "Keanu Reeves returning to the Constantine franchise, as revealed by Deadline earlier this afternoon, has thrown up some dust in the TV business. HBO Max has passed on the J.J. Abrams-exec produced television series version of Constantine, which was being writ…",
      url: "https://deadline.com/2022/09/j-j-abrams-constantine-series-madame-x-will-be-shopped-elsewhere-after-hbo-max-passes-1235121246/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/09/GettyImages-1392860001.jpg?w=1024",
      publishedAt: "2022-09-16T23:01:00Z",
      content:
        "Keanu Reeves returning to the Constantine franchise, as revealed by Deadline earlier this afternoon, has thrown up some dust in the TV business.\r\nHBO Max has passed on the J.J. Abrams-exec produced t… [+1598 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Queen's Funeral: King Charles Requested Prince Harry Be Allowed to Wear Military Uniform - Entertainment Tonight",
      description:
        "Keanu Reeves returning to the Constantine franchise, as revealed by Deadline earlier this afternoon, has thrown up some dust in the TV business. HBO Max has passed on the J.J. Abrams-exec produced television series version of Constantine, which was being writ…",
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLyWIbKDj6U8",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Donald-Trump-Pennsylvania-Rally.jpg",
      publishedAt: "2022-09-16T23:00:11Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Cat Zakrzewski",
      title: "5th Circuit upholds Texas social media law - The Washington Post",
      description:
        "The judges ruled that while the First Amendment guarantees every person’s right to free speech, it doesn’t guarantee corporations the right to “muzzle speech.”",
      url: "https://www.washingtonpost.com/technology/2022/09/16/5th-circuit-texas-social-media-law/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VEF52LRAAMI63HHGNASTXUYYMQ.jpg&w=1440",
      publishedAt: "2022-09-16T22:43:48Z",
      content:
        "The 5th Circuit Court of Appeals on Friday upheld a controversial Texas social media law that bars companies from removing posts based on a persons political ideology, overturning a lower courts deci… [+1724 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Adam Sabes, Jake Gibson, David Spunt",
      title:
        "DOJ, Trump lawyers called to New York by Mar-a-Lago raid special master for 'preliminary conference' - Fox News",
      description:
        "Special Master Raymond Dearie directed lawyers for former President Trump and the Department of Justice to appear in a New York federal courthouse on Sept. 20.",
      url: "https://www.foxnews.com/politics/doj-trump-lawyers-called-new-york-mar-a-lago-raid-special-master-preliminary-conference",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Donald-Trump-Pennsylvania-Rally.jpg",
      publishedAt: "2022-09-16T22:37:40Z",
      content:
        "The special master appointed by U.S. District Judge Aileen Cannon is directing lawyers for both the Department of Justice and former President Trump to appear in a New York federal courthouse on Sept… [+1484 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Baxter Holmes, Malika Andrews",
      title:
        "NBPA executive director wants the NBA to ban Phoenix Suns owner Robert Sarver for life - ESPN",
      description:
        "NBPA executive director Tamika Tremaglio told ESPN that the league's players are \"incredibly upset\" about the punishment given to Suns owner Robert Sarver, but there's been no discussion about boycotting games.",
      url: "https://www.espn.com/nba/story/_/id/34605522/nbpa-executive-director-wants-nba-ban-phoenix-suns-owner-robert-sarver-life",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0916%2Fr1062751_1296x729_16%2D9.jpg",
      publishedAt: "2022-09-16T22:30:12Z",
      content:
        "NBPA executive director Tamika Tremaglio, saying she was speaking on behalf of NBA players, on Friday called for a lifetime ban of Phoenix Suns majority owner Robert Sarver, who was given a one-year … [+3132 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Charles Robinson",
      title:
        "Cowboys owner Jerry Jones is already fueling drama around CeeDee Lamb after one bad game - Yahoo Sports",
      description:
        "Cowboys brass hyped up CeeDee Lamb as the team's new No. 1 receiver this season. Are they already doubting him after a rough Week 1?",
      url: "https://sports.yahoo.com/cowboys-owner-jerry-jones-is-already-fueling-drama-around-cee-dee-lamb-after-one-bad-game-223010206.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/_kX3kF4GuY8a6YCgaiRzlQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/c6f47e20-360d-11ed-bf2f-68294a73b51d",
      publishedAt: "2022-09-16T22:30:10Z",
      content:
        "Of all the punishment CeeDee Lamb absorbed one game into the Dallas Cowboys season, the most significant hit may have been delivered from inside the ownership suite. Twice, no less.\r\nJust days after … [+3630 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        "Nick Paton Walsh, Natalie Gallón, Kostyantin Gak, Brice Laine, Jonny Hallam, Brad Lendon, Tim Lister, Yulia Kesaieva, Maria Avdeeva, Victoria Butenko and Ivana Kottasová, CNN",
      title:
        "Some bodies found at mass burial site in Izium show 'signs of torture,' Ukraine says - CNN",
      description:
        "Even the heavy rainfall couldn't erase the smell of death in the pine forest in Izium on Friday afternoon, as Ukrainian investigators worked their way through a mass burial site found in the eastern Ukrainian city after its recapture from Russian forces.",
      url: "https://www.cnn.com/2022/09/16/europe/ukraine-izium-mass-burial-site-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220915221939-05-ukraine-izium-mass-burial-site-intl-hnk-super-tease.jpeg",
      publishedAt: "2022-09-16T22:25:00Z",
      content: null,
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "ANDREW DeMILLO Associated Press",
      title: "Sarah Sanders undergoes surgery for thyroid cancer - ABC News",
      description:
        "Former White House press secretary and Arkansas gubernatorial hopeful Sarah Sanders is recovering after undergoing surgery for thyroid cancer",
      url: "https://abcnews.go.com/Politics/wireStory/sarah-sanders-undergoes-surgery-thyroid-cancer-90032687",
      urlToImage:
        "https://s.abcnews.com/images/Politics/WireAP_531db8a07aa949ca8f74d9dabbc2b821_16x9_992.jpg",
      publishedAt: "2022-09-16T22:18:45Z",
      content:
        "LITTLE ROCK, Ark. -- Former White House press secretary Sarah Sanders, who is running for governor in Arkansas, underwent surgery Friday for thyroid cancer.\r\nSanders announced she underwent the surge… [+2854 chars]",
    },
    {
      source: { id: "nfl-news", name: "NFL News" },
      author: "Cynthia Frelund",
      title:
        "Will receivers in new situations continue to thrive? Plus, my favorite upset pick for Week 2 - NFL.com",
      description:
        "After big-time Week 1 performances, will star WRs with new teams keep dominating defenses? Analytics expert Cynthia Frelund explores a wide receiver trend and provides her favorite player projections for Week 2.",
      url: "https://www.nfl.com/news/will-receivers-in-new-situations-continue-to-thrive-plus-my-favorite-upset-pick-",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/derajszckw1q1hjv7loz",
      publishedAt: "2022-09-16T22:14:00Z",
      content:
        "Eleven quarters and 11 minutes.\r\nThat's the average amount of regular-season game time -- just short of three full games -- that it took for top-tier wide receivers who switched teams since 1997 to h… [+2453 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Krystal Hur",
      title:
        "Cramer’s week ahead: FedEx’s warning shows the Fed is further along in fighting inflation than expected - CNBC",
      description: "Cramer also previewed next week's slate of earnings.",
      url: "https://www.cnbc.com/2022/09/16/cramers-week-ahead-how-powell-the-fed-may-react-to-fedexs-warning.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107109967-1661524568032-NUP_198430_00186r.jpg?v=1663366363&w=1920&h=1080",
      publishedAt: "2022-09-16T22:12:43Z",
      content:
        "CNBC's Jim Cramer on Friday said that FedEx's warning of worsening economic conditions suggests the Federal Reserve is doing better in its inflation effort than expected meaning the central bank coul… [+3235 chars]",
    },
    {
      source: { id: null, name: "Eonline.com" },
      author: "Lindsay Weinberg",
      title:
        'Chrissy Teigen Responds to "Brutal" Comments After Sharing Her Miscarriage Was Life-Saving Abortion - E! NEWS',
      description:
        "Chrissy Teigen addressed mean comments after sharing that her miscarriage in 2020 was an abortion to save her own life.",
      url: "https://www.eonline.com/news/1346723/chrissy-teigen-responds-to-brutal-comments-after-sharing-her-miscarriage-was-life-saving-abortion",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2022816/rs_1200x1200-220916144716-1200-chrissy-teigen-GettyImages-1393857049.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2022-09-16T22:07:00Z",
      content:
        "Chrissy Teigen is addressing social media users after sharing that she previously had a life-saving abortion.\r\nThe model recently discussed her 2020 pregnancy loss, explaining that she had medical he… [+985 chars]",
    },
    {
      source: { id: null, name: "Orlando Sentinel" },
      author: "Joe Mario Pedersen, Richard Tribou",
      title:
        "Tropical Storm Fiona nears Caribbean, could become hurricane - Orlando Sentinel",
      description:
        "Tropical Storm Fiona left behind heavy rainfall on portions of the Leeward Islands as it approached Guadeloupe with a chance of forming into a hurricane that can threaten the Bahamas as early as next week, the National Hurricane Center said in its 8 p.m. upda…",
      url: "https://www.orlandosentinel.com/weather/hurricane/os-ne-tropical-storm-fiona-friday-20220916-k35uxq4t6nhbpdwrri5i33iv2a-story.html",
      urlToImage:
        "https://www.orlandosentinel.com/resizer/yBo6A_UgL-ImRRYISXPGnqPjxjA=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/HACUZKM3D5F4HFT3XMZRZTVTDU.JPG",
      publishedAt: "2022-09-16T21:39:44Z",
      content:
        "Tropical Storm Fiona left behind heavy rainfall on portions of the Leeward Islands as it approached Guadeloupe with a chance of forming into a hurricane that can threaten the Bahamas as early as next… [+4073 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Paulina Dedaj",
      title:
        "Russia has not responded to US offer regarding Brittney Griner, Paul Whelan release, Biden administration says - Fox News",
      description:
        'The White House on Friday revealed that Russia has not yet responded to a "substantial proposal" the U.S. made back in July for the release of Brittney Griner and Paul Whelan.',
      url: "https://www.foxnews.com/sports/russia-responded-us-offer-regarding-brittney-griner-paul-whelan-release-biden-administration-says",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/Brittney-Griner26.jpg",
      publishedAt: "2022-09-16T20:58:15Z",
      content:
        'National Security Council coordinator John Kirby says Russia has not responded to the "substantial proposal" the U.S. offered back in July regarding the release of WNBA star Brittney Griner\r\n and for… [+3107 chars]',
    },
    {
      source: { id: null, name: "MacRumors" },
      author: "Juli Clover",
      title:
        "Apollo App Adds 'Pixel Pals' to the iPhone 14 Pro Dynamic Island - MacRumors",
      description:
        "Popular Reddit app Apollo was today updated with support for the iPhone 14 Pro and Pro Max, and Apollo developer Christian Selig decided to implement...",
      url: "https://www.macrumors.com/2022/09/16/apollo-pixel-pal-dynamic-island/",
      urlToImage:
        "https://images.macrumors.com/t/2wKgQHglP6-8m3rcpgNCyaimI5U=/1600x/article-new/2022/09/apollo-pixel-pal-zoom.jpg",
      publishedAt: "2022-09-16T20:49:47Z",
      content:
        'Popular Reddit app Apollo was today updated with support for the iPhone 14 Pro and Pro Max, and Apollo developer Christian Selig decided to implement a fun little feature -- a "tamagotchi" for the Dy… [+1110 chars]',
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Queen Elizabeth's Great-Grandchildren attend Lying in State - The Royal Family Channel",
      description:
        "Other members of the royal family look on from the balcony of Westminster Hall as the Queen's children stand vigil by their mother's coffin. . Report by Loui...",
      url: "https://www.youtube.com/watch?v=dLPK_hc8ooo",
      urlToImage: "https://i.ytimg.com/vi/dLPK_hc8ooo/hqdefault.jpg",
      publishedAt: "2022-09-16T20:38:49Z",
      content: null,
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Anthony Wood",
      title:
        "Saturn’s Distinctive Look May Be Rooted in the Death of an Ancient Moon - IGN",
      description:
        "Saturn's rings and distinctive tilt may have been caused by the destruction of a previously unknown moon roughly 160 million years ago",
      url: "https://www.ign.com/articles/saturns-distinctive-look-may-be-rooted-death-ancient-moon",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/09/16/saturn-cassini-thumbnail-1663356073752.jpg?width=1280",
      publishedAt: "2022-09-16T20:08:18Z",
      content:
        "Saturn may owe its sweeping ring system and distinctive tilt to the death of an ancient moon named Chrysalis, according to the results of a new study.\r\nThe gas giant Saturn is one of the most spectac… [+4615 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "K.J. Yossman",
      title:
        "David Beckham, Sharon Osbourne and More Queue for Hours to See Queen Elizabeth II Lying in State - Variety",
      description:
        "David Beckham, Sharon Osbourne and “Good Morning Britain” anchor Susanna Reid are among the hundreds of thousands of mourners who have spent hours queuing for a chance to pay their respects to Queen Elizabeth II while she lies in state ahead of her funeral on…",
      url: "https://variety.com/2022/politics/news/queue-london-queen-lying-in-state-1235374979/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/09/Collage-Maker-16-Sep-2022-06.27-PM.jpg?w=1000",
      publishedAt: "2022-09-16T19:55:00Z",
      content:
        "David Beckham, Sharon Osbourne and “Good Morning Britain” anchor Susanna Reid are among the hundreds of thousands of mourners who have spent hours queuing for a chance to pay their respects to Queen … [+6839 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "John Haltiwanger",
      title:
        "Modi criticizes Russia's war in Ukraine to Putin's face - Business Insider",
      description:
        '"We want all of this to end as soon as possible," Putin said in reply to India\'s PM, who has dodged joining efforts to punish Russia over the war.',
      url: "https://www.businessinsider.com/modi-criticizes-russia-war-in-ukraine-to-putin-face-2022-9",
      urlToImage:
        "https://i.insider.com/6324b629a6c3e8001966995d?width=1200&format=jpeg",
      publishedAt: "2022-09-16T19:48:23Z",
      content:
        "Indian Prime Minister Narendra Modi on Friday criticized Russia's war in Ukraine while meeting with Russian President Vladimir Putin face-to-face while both were in Uzbekistan for the Shanghai Cooper… [+3101 chars]",
    },
  ];

  // Constructor used for getting the state
  constructor() {
    super();
    this.state = {
      article: this.articles,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  // function for handling next page
  nextHandler = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
      let parseData = await data.json();

      this.setState({
        page: this.state.page + 1,
        article: parseData.articles,
      });
    }
  };

  // function for handling Previous page
  prevHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: this.state.page - 1,
      article: parseData.articles,
    });
  };

  render() {
    return (
      <>
        <h2 className="my-4 text-center ">NewsMonkey - Top Headlines</h2>
        <div className="container1 news__container">
          {this.state.article.map((item, index) => {
            return (
              <NewsItem
                key={index}
                title={item.title ? item.title.slice(0, 20) : ""}
                description={
                  item.description ? item.description.slice(0, 80) : ""
                }
                imgUrl={item.urlToImage}
                newsUrl={item.url}
              />
            );
          })}
        </div>

        <div className="container1 d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-sm btn-primary"
            onClick={this.prevHandler}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={this.nextHandler}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
export default News;
