import { Component, OnInit } from '@angular/core';
//Calendar
import { CalendarEvent, CalendarModule, CalendarView, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { endOfDay, startOfDay } from 'date-fns';


@Component({
  selector: 'app-intern-calendar',
  templateUrl: './intern-calendar.component.html',
  styleUrls: ['./intern-calendar.component.scss']
})
export class InternCalendarComponent implements OnInit {

  viewDate!: Date;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  events!: CalendarEvent[];

  constructor() { }

  ngOnInit(): void {

    this.viewDate = new Date();
    this.events = [
      {
        start: startOfDay(new Date()),
        // end: endOfDay(new Date()),
        title: 'An event with no end date'
      },
      {
        start: startOfDay(new Date()),
        end: endOfDay(new Date(Date.now() + (3600 * 1000 * 24))),
        title: 'An event on two days'
      }
    ]
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }) {

    console.log(date);
  }

}
