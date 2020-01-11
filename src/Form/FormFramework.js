import { configure } from "@testing-library/react";

export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: ""
  };
}
