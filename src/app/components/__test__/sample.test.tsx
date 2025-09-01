import { render } from "@testing-library/react";
import Sample from "../Sample";

describe("Sample", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<Sample />);
  });
});
