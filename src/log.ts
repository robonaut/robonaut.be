const levels = ["info", "warn", "error"] as const;

import config from "./config";

const log = (level: typeof levels[number]) => (
  message: string,
  obj?: any //eslint-disable-line @typescript-eslint/no-explicit-any
): void => {
  if (config.LOG_LEVEL === "disable") {
    return;
  } else if (obj) {
    console[level](`${message}\n%o\n`, obj); // eslint-disable-line no-console
  } else {
    console[level](`${message}\n`); // eslint-disable-line no-console
  }
};

export default {
  info: log("info"),
  warn: log("warn"),
  error: log("error"),
};
