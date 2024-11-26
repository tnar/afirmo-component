import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";

// Extend dayjs with plugins
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

// Export configured instance
export default dayjs;
