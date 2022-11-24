import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const [selectedDate, setSelectedDate] = useState(new Date());

const date = format(selectedDate, "PP");

//diplay calender components
<DayPicker mode='single' selected={selectedDate} onSelect={setSelectedDate} />;
