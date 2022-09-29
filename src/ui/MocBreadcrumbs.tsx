import React from "react";
import PomodoroTimerPlugin from "../../main";
import moment from "moment";

enum Mode {
  ModePomodoro,
  ModeShortBreak,
  ModeLongBreak,
}

interface PomodoroTimerElementProps {
  plugin: PomodoroTimerPlugin;
}

interface PomodoroTimerElementState {
  mode: Mode;
  time: string;

  // startedAt: Date;
  // remainMilliSeconds: number;
}

export class MocBreadcrumbs extends React.Component<
  PomodoroTimerElementProps,
  PomodoroTimerElementState
> {
  private intervalId: number;
  constructor(props: PomodoroTimerElementProps) {
    super(props);
    this.state = {
      mode: Mode.ModePomodoro,
      time: 'some time',
      // startedAt: null,
      // remainMilliSeconds:
      //   this.props.plugin.settings.pomodoroMinutes * 60 * 1000,
    };
  }

  componentWillUnmount(): void {
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }
  }

  componentDidUpdate(
    prevProps: Readonly<PomodoroTimerElementProps>,
    prevState: Readonly<PomodoroTimerElementState>
  ): void {
    // if (
    //   prevState.startedAt !== this.state.startedAt ||
    //   prevState.remainMilliSeconds !== this.state.remainMilliSeconds ||
    //   prevState.mode !== this.state.mode
    // ) {
    //   this.updateTime();
    // }
  }

  // TODO
  // * render first parent MOC
  // * find first parent MOC
  // * find trail of all MOCs up to Home
  // * display full trail bellow
  render(): JSX.Element {
    return (
      <div className={"pomodoro-timer"}>
        <div className={"mode-switchers-container"}>
          <div
            className={
              "pomodoro " +
              (this.state.mode == Mode.ModePomodoro ? "enabled" : "")
            }
          >
            Pomodoro
          </div>
          <div
            className={
              "short-break " +
              (this.state.mode == Mode.ModeShortBreak ? "enabled" : "")
            }

          >
            Short Break
          </div>
          <div
            className={
              "long-break " +
              (this.state.mode == Mode.ModeLongBreak ? "enabled" : "")
            }

          >
            Long Break
          </div>
        </div>
        <div

        >
          {this.state.time}
        </div>
        {/* <button onClick={this.onStartStop.bind(this)}>
          {this.state.startedAt !== null ? "Stop" : "Start"}
        </button> */}
        {/* <button onClick={this.onReset.bind(this)}>▶|</button> */}
      </div>
    );
  }
}
