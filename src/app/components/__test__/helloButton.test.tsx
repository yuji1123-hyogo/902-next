import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function HelloButton() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Hello</button>
      <p data-testid="count">count: {count}</p>
    </div>
  );
}

import React from "react";

describe("HelloButton", () => {
  it("クリックでカウントが増える", async () => {
    const user = userEvent.setup();
    render(<HelloButton />);

    await user.click(screen.getByRole("button", { name: "Hello" }));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });
});
