import { css } from "@emotion/react"
import { getColor } from "@illa-design/react"
import {
  BORDER_WIDTH,
  SCROLL_CONTAINER_PADDING,
  UNIT_HEIGHT,
} from "@/page/App/components/DotPanel/constant/canvas"
import { getShadowStyle } from "@/utils/styleUtils/shadow"

export const outerComponentCanvasContainerStyle = (
  padding: string,
  background: string = "white",
  shadowSize: "none" | "small" | "medium" | "large",
) => css`
  height: 100%;
  width: 100%;
  padding: ${padding
    .split(" ")
    .map((v) => v + "px")
    .join(" ")};
  position: relative;
  overflow: hidden;
  background: ${background};
  box-shadow: ${getShadowStyle(shadowSize)};
`

export const outerModalCanvasContainerStyle = (padding: string) => css`
  height: 100%;
  width: 100%;
  padding: ${padding
    .split(" ")
    .map((v) => v + "px")
    .join(" ")};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const outerComponentCanvasContainerWithJsonStyle = (
  padding: number,
) => css`
  height: 100%;
  width: 100%;
  padding: ${padding}px;
  position: relative;
  overflow: auto;
`

export const componentCanvasContainerStyle = css`
  width: 100%;
  height: 100%;
  position: relative;
  padding: ${SCROLL_CONTAINER_PADDING}px;
  overflow: hidden auto;
`

export const containerShapeStyle = (padding: string) => css`
  top: ${padding.split(" ")[0]}px;
  bottom: ${padding.split(" ").length > 1
    ? padding.split(" ")[2]
    : padding.split(" ")[0]}px;
  left: ${padding.split(" ").length > 1
    ? padding.split(" ")[3]
    : padding.split(" ")[0]}px;
  right: ${padding.split(" ").length > 1
    ? padding.split(" ")[1]
    : padding.split(" ")[0]}px;
  position: absolute;
  border: ${BORDER_WIDTH}px solid ${getColor("grayBlue", "09")};
  pointer-events: none;
`

export const dropZoneStyle = (canvasHeight?: number) => css`
  width: 100%;
  height: ${canvasHeight ? `${canvasHeight}px` : "130vh"};
`

export const applyComponentCanvasStyle = (
  unitWidth: number,
  showDot: boolean = false,
) => {
  return css`
    width: 100%;
    height: 100%;
    ${showDot
      ? applyDotBackgroundStyle(unitWidth)
      : normalCanvasBackgroundStyle}
    position: relative;
  `
}

const normalCanvasBackgroundStyle = css`
  background: unset;
`

const applyDotBackgroundStyle = (unitWidth: number) => {
  return css`
    background-image: radial-gradient(
      circle at 1px 1px,
      ${getColor("grayBlue", "08")} 1px,
      transparent 0px
    );
    background-repeat: repeat;
    background-size: ${unitWidth}px ${UNIT_HEIGHT}px;
  `
}

export const selectoSelectionStyle = css`
  > .selecto-selection {
    position: absolute !important;
    transform: translate(
      var(--illa-select-area-left, 0),
      var(--illa-select-area-top, 0)
    ) !important;
    width: var(--illa-select-area-width, 0) !important;
    height: var(--illa-select-area-height, 0) !important;
    background: rgba(101, 74, 236, 0.08) !important;
    border: 1px solid ${getColor("techPurple", "01")} !important;
  }
`

export const maskStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${getColor("blackAlpha", "04")};
  z-index: -1;
`
