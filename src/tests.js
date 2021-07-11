export const locations = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "3431644",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telanaipura",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jambi",
    },
  },
  {
    Version: 1,
    Key: "300558",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telok Blangah New Town",
    Country: {
      ID: "SG",
      LocalizedName: "Singapore",
    },
    AdministrativeArea: {
      ID: "05",
      LocalizedName: "South West",
    },
  },
  {
    Version: 1,
    Key: "325876",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telford",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "TFW",
      LocalizedName: "Telford and Wrekin",
    },
  },
  {
    Version: 1,
    Key: "169072",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telavi",
    Country: {
      ID: "GE",
      LocalizedName: "Georgia",
    },
    AdministrativeArea: {
      ID: "KA",
      LocalizedName: "Kakheti",
    },
  },
  {
    Version: 1,
    Key: "230611",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telsiai",
    Country: {
      ID: "LT",
      LocalizedName: "Lithuania",
    },
    AdministrativeArea: {
      ID: "TE",
      LocalizedName: "Telšiai",
    },
  },
  {
    Version: 1,
    Key: "2723742",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telégrafo",
    Country: {
      ID: "BR",
      LocalizedName: "Brazil",
    },
    AdministrativeArea: {
      ID: "PA",
      LocalizedName: "Pará",
    },
  },
  {
    Version: 1,
    Key: "186933",
    Type: "City",
    Rank: 55,
    LocalizedName: "Tela",
    Country: {
      ID: "HN",
      LocalizedName: "Honduras",
    },
    AdministrativeArea: {
      ID: "AT",
      LocalizedName: "Atlántida",
    },
  },
  {
    Version: 1,
    Key: "3453754",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telaga Asih",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
  {
    Version: 1,
    Key: "3453755",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telagamurni",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
];

export const locationCurrentWeather = [
  {
    LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
    EpochTime: 1625831160,
    WeatherText: "Sunny",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 29.8,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 86,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];

export const fiveDayForecast = {
  Headline: {
    EffectiveDate: "2021-07-10T08:00:00+03:00",
    EffectiveEpochDate: 1625893200,
    Severity: 4,
    Text: "Pleasant this weekend",
    Category: "mild",
    EndDate: null,
    EndEpochDate: null,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2021-07-09T07:00:00+03:00",
      EpochDate: 1625803200,
      Temperature: {
        Minimum: {
          Value: 27.3,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 30.5,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2021-07-10T07:00:00+03:00",
      EpochDate: 1625889600,
      Temperature: {
        Minimum: {
          Value: 27.2,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 30.3,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2021-07-11T07:00:00+03:00",
      EpochDate: 1625976000,
      Temperature: {
        Minimum: {
          Value: 26.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 30.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2021-07-12T07:00:00+03:00",
      EpochDate: 1626062400,
      Temperature: {
        Minimum: {
          Value: 27.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 31.4,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2021-07-13T07:00:00+03:00",
      EpochDate: 1626148800,
      Temperature: {
        Minimum: {
          Value: 26.2,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 30.9,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    },
  ],
};

export const favoriteLocations = [
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Tel Aviv" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "215854",
    LocalizedName: "Tel Aviv",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Bat yam" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "123456",
    LocalizedName: "Bat yam",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Holon" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "123455",
    LocalizedName: "Holon",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Holon" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "123455",
    LocalizedName: "Holon",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Holon" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "123455",
    LocalizedName: "Holon",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Holon" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "123455",
    LocalizedName: "Holon",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TA", LocalizedName: "Holon" },
    Country: { ID: "IL", LocalizedName: "Israel" },
    Key: "123455",
    LocalizedName: "Holon",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
];

export const favoriteLocationsData = [
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
  [
    {
      LocalObservationDateTime: "2021-07-09T14:46:00+03:00",
      EpochTime: 1625831160,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ],
];
