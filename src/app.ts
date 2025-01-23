import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import questions from "./questions.json";
import askholeQuestions from "./askhole_questions.json";
import askholeExtraQuestions from "./askhole_extra_questions.json";
import classNames from "classnames";
import styles from "./app.module.css";

@customElement("app-main")
export class AppMain extends LitElement {
  @property({ type: Number })
  questionIndex = 0;

  @property({ type: String })
  questionSet: "questions" | "askhole" | "askhole_extra" = "questions";

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // Don't create a shadow dom root — we want to inherit styles!
    return this;
  }

  render() {
    return html`
      <div class=${styles.container}>
        <p class=${styles.question}>
          ${this.questionSet === "questions"
            ? questions[this.questionIndex]
            : this.questionSet === "askhole"
              ? askholeQuestions[this.questionIndex]
              : askholeExtraQuestions[this.questionIndex]}
        </p>

        <div class=${styles.buttons}>
          <button
            @click=${() => {
              this.questionSet = "questions";
              this.questionIndex = Math.floor(Math.random() * questions.length);
            }}
            class=${classNames("outline", {
              secondary: this.questionSet === "questions"
            })}
          >
            Random question (Russell&apos;s set)
          </button>
          <button
            @click=${() => {
              this.questionSet = "askhole";
              this.questionIndex = Math.floor(
                Math.random() * askholeQuestions.length
              );
            }}
            class=${classNames("outline", {
              secondary: this.questionSet === "askhole"
            })}
          >
            Random question (original Askhole set)
          </button>
          <button
            @click=${() => {
              this.questionSet = "askhole_extra";
              this.questionIndex = Math.floor(
                Math.random() * askholeExtraQuestions.length
              );
            }}
            class=${classNames("outline", {
              secondary: this.questionSet === "askhole_extra"
            })}
          >
            Random question (Askhole extras set)
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-main": AppMain;
  }
}
