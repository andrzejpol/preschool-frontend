import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import ConfirmationPopup from "../ConfirmationPopup";

describe("ConfirmationPopup Component", () => {
  const action = "usunąć";
  const onConfirm = vi.fn();
  const onClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with the given action", () => {
    render(
      <ConfirmationPopup
        action={action}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    );

    // Check if the action is displayed
    expect(
      screen.getByText(`Czy na pewno chcesz ${action} tego użytkownika?`)
    ).toBeInTheDocument();

    // Check if the buttons are present
    expect(screen.getByText("Potwierdź")).toBeInTheDocument();
    expect(screen.getByText("Anuluj")).toBeInTheDocument();
  });

  it("calls onConfirm when 'Potwierdź' button is clicked", () => {
    render(
      <ConfirmationPopup
        action={action}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    );

    const confirmButton = screen.getByText("Potwierdź");
    fireEvent.click(confirmButton);

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when 'Anuluj' button is clicked", () => {
    render(
      <ConfirmationPopup
        action={action}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    );

    const cancelButton = screen.getByText("Anuluj");
    fireEvent.click(cancelButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not close the popup when clicking inside the modal content", () => {
    render(
      <ConfirmationPopup
        action={action}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    );

    const modalContent = screen.getByText(
      `Czy na pewno chcesz ${action} tego użytkownika?`
    ).parentElement;

    fireEvent.click(modalContent);

    expect(onClose).not.toHaveBeenCalled();
  });
});
