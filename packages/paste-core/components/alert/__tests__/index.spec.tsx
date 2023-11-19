import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { Alert } from "../src";

const onDismissMock: jest.Mock = jest.fn();

describe("Alert", () => {
  describe("Dismiss button", () => {
    it("Should add a dismiss button when onDismiss is passed as a function to call", () => {
      const eventHandlerMock: jest.Mock = jest.fn();
      const { getByRole } = render(
        <Alert onDismiss={eventHandlerMock} variant="neutral">
          This is an alert
        </Alert>,
      );

      expect(getByRole("button")).toBeInTheDocument();
    });

    it("Should call the onDismiss event handler when close button clicked", () => {
      const eventHandlerMock: jest.Mock = jest.fn();

      const { getByRole } = render(
        <Alert onDismiss={eventHandlerMock} variant="neutral">
          This is an alert
        </Alert>,
      );

      const button = getByRole("button");
      userEvent.click(button);
      expect(eventHandlerMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("Aria roles", () => {
    it("Should add the role of status to the neutral alert", () => {
      const { getByRole } = render(<Alert variant="neutral">This is an alert</Alert>);
      expect(getByRole("status")).toBeInTheDocument();
    });

    it("Should add the role of alert to the error alert", () => {
      const { getByRole } = render(<Alert variant="error">This is an alert</Alert>);
      expect(getByRole("alert")).toBeInTheDocument();
    });

    it("Should add the role of alert to the warning alert", () => {
      const { getByRole } = render(<Alert variant="warning">This is an alert</Alert>);
      expect(getByRole("alert")).toBeInTheDocument();
    });

    it("Should add the provided role to the alert", () => {
      const { getByRole } = render(
        <Alert role="tab" variant="error">
          This is an alert
        </Alert>,
      );
      expect(getByRole("tab")).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    it("should set default data-paste-element attribute on Alert and customizable Alert children", (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Alert data-testid="alert-customization" variant="neutral" onDismiss={onDismissMock}>
            This is my test alert
          </Alert>
        </CustomizationProvider>,
      );

      const alert = screen.getByTestId("alert-customization");
      expect(alert).toHaveAttribute("data-paste-element", "ALERT");

      expect(alert.querySelector('[data-paste-element="ALERT_ICON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_BUTTON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_ICON"]')).toBeInTheDocument();
    });

    it("should add custom styles to Alert and Alert children", (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            ALERT: {
              backgroundColor: "colorBackground",
            },
            ALERT_ICON: {
              color: "colorTextIconNeutral",
            },
            ALERT_DISMISS_BUTTON: {
              backgroundColor: "colorBackgroundBodyInverse",
            },
            ALERT_DISMISS_ICON: {
              color: "colorTextInverse",
            },
          }}
        >
          <Alert data-testid="alert-customization" variant="neutral" onDismiss={onDismissMock}>
            This is my test alert
          </Alert>
        </CustomizationProvider>,
      );

      const alert = screen.getByTestId("alert-customization");

      expect(alert).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
      expect(alert.querySelector('[data-paste-element="ALERT_ICON"]')).toHaveStyleRule("color", "rgb(0, 20, 137)");
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_BUTTON"]')).toHaveStyleRule(
        "background-color",
        "rgb(18, 28, 45)",
      );
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_ICON"]')).toHaveStyleRule(
        "color",
        "rgb(255, 255, 255)",
      );
    });

    it("should set custom element name and properly apply styles to Alert and customizable children", (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            MYALERT: {
              backgroundColor: "colorBackground",
            },
            MYALERT_ICON: {
              color: "colorTextIconNeutral",
            },
            MYALERT_DISMISS_BUTTON: {
              backgroundColor: "colorBackgroundBodyInverse",
            },
            MYALERT_DISMISS_ICON: {
              color: "colorTextInverse",
            },
          }}
        >
          <Alert data-testid="alert-customization" element="MYALERT" variant="neutral" onDismiss={onDismissMock}>
            This is my test alert
          </Alert>
        </CustomizationProvider>,
      );

      const alert = screen.getByTestId("alert-customization");
      expect(alert).toHaveAttribute("data-paste-element", "MYALERT");

      expect(alert.querySelector('[data-paste-element="MYALERT_ICON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_BUTTON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_ICON"]')).toBeInTheDocument();

      expect(alert).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
      expect(alert.querySelector('[data-paste-element="MYALERT_ICON"]')).toHaveStyleRule("color", "rgb(0, 20, 137)");
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_BUTTON"]')).toHaveStyleRule(
        "background-color",
        "rgb(18, 28, 45)",
      );
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_ICON"]')).toHaveStyleRule(
        "color",
        "rgb(255, 255, 255)",
      );
    });
  });

  describe("i18n", () => {
    it("should have default dismiss button text", () => {
      render(
        <Alert variant="neutral" onDismiss={onDismissMock}>
          This is an alert
        </Alert>,
      );
      const dismissButton = screen.getByRole("button", { name: "Dismiss alert" });
      expect(dismissButton).toBeDefined();
    });

    it("should use i18nDismissLabel for dismiss button text", () => {
      render(
        <Alert variant="neutral" i18nDismissLabel="Fermez l'alerte" onDismiss={onDismissMock}>
          C&apos;est une alerte neutre.
        </Alert>,
      );
      const dismissButton = screen.getByRole("button", { name: "Fermez l'alerte" });
      expect(dismissButton).toBeDefined();
    });

    it("should have default error variant icon text", () => {
      render(
        <Alert data-testid="alert-i18n" variant="error">
          This is an alert
        </Alert>,
      );
      const alert = screen.getByTestId("alert-i18n");
      const icon = alert.querySelector('[data-paste-element="ALERT_ICON"]');
      expect(icon?.textContent).toEqual("(error)");
    });

    it("should have default neutral variant icon text", () => {
      render(
        <Alert data-testid="alert-i18n" variant="neutral">
          This is an alert
        </Alert>,
      );
      const alert = screen.getByTestId("alert-i18n");
      const icon = alert.querySelector('[data-paste-element="ALERT_ICON"]');
      expect(icon?.textContent).toEqual("(information)");
    });

    it("should have default warning variant icon text", () => {
      render(
        <Alert data-testid="alert-i18n" variant="warning">
          This is an alert
        </Alert>,
      );
      const alert = screen.getByTestId("alert-i18n");
      const icon = alert.querySelector('[data-paste-element="ALERT_ICON"]');
      expect(icon?.textContent).toEqual("(warning)");
    });

    it("should use the i18nErrorLabel for error variant icon text", () => {
      render(
        <Alert data-testid="alert-i18n" variant="error" i18nErrorLabel="(erreur)">
          C&apos;est une alerte.
        </Alert>,
      );
      const alert = screen.getByTestId("alert-i18n");
      const icon = alert.querySelector('[data-paste-element="ALERT_ICON"]');
      expect(icon?.textContent).toEqual("(erreur)");
    });

    it("should use the i18nNeutralLabel for neutral variant icon text", () => {
      render(
        <Alert data-testid="alert-i18n" variant="neutral" i18nNeutralLabel="(information)">
          C&apos;est une alerte.
        </Alert>,
      );
      const alert = screen.getByTestId("alert-i18n");
      const icon = alert.querySelector('[data-paste-element="ALERT_ICON"]');
      expect(icon?.textContent).toEqual("(information)");
    });

    it("should use the i18nWarningLabel for warning variant icon text", () => {
      render(
        <Alert data-testid="alert-i18n" variant="warning" i18nWarningLabel="(avertissement)">
          C&apos;est une alerte.
        </Alert>,
      );
      const alert = screen.getByTestId("alert-i18n");
      const icon = alert.querySelector('[data-paste-element="ALERT_ICON"]');
      expect(icon?.textContent).toEqual("(avertissement)");
    });
  });
});
