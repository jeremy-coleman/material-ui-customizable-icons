/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class Inactive extends SvgIcon {
  public displayName: string = 'Inactive';
  public group(style: any): JSX.Element {
    return (
      <g>
        <circle cx="12" cy="12" r="12" fill={style.fill}/>
        <path d="M 4 12 L 11 18" stroke={style.color} fill="transparent" strokeWidth="3" />
        <path d="M 9 18 L 20 7" stroke={style.color} fill="transparent" strokeWidth="3" />
        <path d="M 2 2 L 22 22" stroke={style.fill} fill="transparent" strokeWidth="3" />
      </g>
    );
  }
  public render() {
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...{fill: this.context.muiTheme.icon.color},
      ...this.props.style,
    };
    return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default Inactive;