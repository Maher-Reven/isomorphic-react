import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe("The Question Detail Component", () => {
  describe("the container element", () => {
    describe("mapStateToProps", () => {
      it("should map state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "space is big"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        console.log(componentState);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });

  describe("the display element", () => {
    it("should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="Thanks"
          body="43"
          answer_count={0}
          tags={["hitchhiking"]}
        />
      );
      expect(tree.toJSON()).toMatchInlineSnapshot(`
        <div>
          <h3
            className="mb-2"
          >
            Thanks
          </h3>
          <div>
            <div
              className="mb-3"
            >
              <div>
                <code>
                  hitchhiking
                </code>
              </div>
            </div>
            <div>
              <p>
                43
              </p>
            </div>
            <div>
              0
               Answers
            </div>
          </div>
        </div>
      `);
    });
  });
});
