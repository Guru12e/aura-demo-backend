import axios from "axios";
import { apiRequest } from "../lib/apiRequest.js";

export const planets = async (req, res) => {
  const {
    year,
    month,
    hours,
    date,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/planets", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("planet");
  res.json(chart.data.output[1]);
};

export const planetsExtended = async (req, res) => {
  const {
    year,
    month,
    hours,
    date,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/planets/extended", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("planetExtended");

  res.send(chart.data.output);
};

export const navamsaChartInfo = async (req, res) => {
  const {
    year,
    month,
    hours,
    date,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/navamsa-chart-info", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: 0,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: 5.3,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("navamsaChart");

  res.json(chart.data.output);
};

export const horoscopeChart = async (req, res) => {
  const {
    name,
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/horoscope-chart-svg-code", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "geocentric",
      ayanamsha: "lahiri",
      language: "en",
    },

    chart_config: {
      font_family: "Mallanna",
      hide_time_location: "False",
      hide_outer_planets: "True",
      chart_style: "south_india",
      native_name: name,
      native_name_font_size: "20px",
      native_details_font_size: "15px",
      chart_border_width: 1,
      planet_name_font_size: "20px",
      chart_heading_font_size: "25px",
      chart_background_color: "#FEE1C7",
      chart_border_color: "#B5A886",
      native_details_font_color: "#000",
      native_name_font_color: "#231F20",
      planet_name_font_color: "#BC412B",
      chart_heading_font_color: "#2D3319",
    },
  });

  const modifiedOutput = chart.data.output
    .replace("//", "")
    .replace("undefined", "round")
    .replace("null", "round");

  res.json(modifiedOutput);
};

export const navamsaChart = async (req, res) => {
  const {
    name,
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/navamsa-chart-svg-code", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
      language: "en",
    },

    chart_config: {
      font_family: "Mallanna",
      hide_time_location: "False",
      hide_outer_planets: "True",
      chart_style: "south_india",
      native_name: name,
      native_name_font_size: "20px",
      native_details_font_size: "15px",
      chart_border_width: 1,
      planet_name_font_size: "20px",
      chart_heading_font_size: "25px",
      chart_background_color: "#FEE1C7",
      chart_border_color: "#B5A886",
      native_details_font_color: "#000",
      native_name_font_color: "#231F20",
      planet_name_font_color: "#BC412B",
      chart_heading_font_color: "#2D3319",
    },
  });

  res.json(chart.data.output);
};

export const tithiTimings = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/tithi-durations", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("tithi");
  res.json(JSON.parse(chart.data.output));
};

export const nakshatraTimings = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/nakshatra-durations", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("nakshatra");

  res.json(JSON.parse(chart.data.output));
};

export const yogaDurations = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/yoga-durations", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: 0,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: 5.3,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("yoga");

  res.json(JSON.parse(chart.data.output));
};

export const karanaDuration = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/karana-durations", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("karana");

  res.json(JSON.parse(chart.data.output));
};

export const vedicWeekDays = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/vedicweekday", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("vedic");

  res.json(chart.data.output);
};

export const mahaDasas = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/vimsottari/maha-dasas", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  console.log("maha");

  res.json(JSON.parse(chart.data.output));
};

export const mahaAndAntarDasas = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post(
    "/vimsottari/maha-dasas-and-antar-dasas",
    {
      year: year,
      month: month,
      date: date,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      latitude: parseInt(latitude),
      longitude: parseInt(longtitude),
      timezone: timezone,
      config: {
        observation_point: "topocentric",
        ayanamsha: "lahiri",
      },
    }
  );

  console.log("mahaAndAntra");

  res.json(JSON.parse(chart.data.output));
};

export const dasaInformation = async (req, res) => {
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const data = new Date();

  const chart = await apiRequest.post("/vimsottari/dasa-information", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
    event_data: {
      year: 2024,
      month: 4,
      date: 1,
      hours: 9,
      minutes: 30,
      seconds: 0,
    },
  });

  console.log("dasaInfo");

  res.json(JSON.parse(chart.data.output));
};

export const getRasi = async (req, res) => {
  const {
    year,
    month,
    hours,
    date,
    minutes,
    seconds,
    latitude,
    longtitude,
    timezone,
  } = req.body;

  const chart = await apiRequest.post("/planets", {
    year: year,
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    latitude: parseInt(latitude),
    longitude: parseInt(longtitude),
    timezone: timezone,
    config: {
      observation_point: "topocentric",
      ayanamsha: "lahiri",
    },
  });

  res.status(200).json(chart.data.output[1].Moon.fullDegree);
};

export const getDailyHoroscope = async (req, res) => {
  const { sign } = req.body;

  try {
    const response = await axios.get(`https://newastro.vercel.app/${sign}`);

    res.status(200).send(response.data.horoscope);
  } catch (error) {
    console.log(error);
  }
};
