$(document).ready(function () {

  const questions = [
    {
      q: "Which keyword declares a variable in JavaScript?",
      a: ["var", "make", "create", "newvar"],
      correct: "var"
    },
    {
      q: "What does jQuery primarily simplify?",
      a: ["CSS styling", "DOM manipulation", "Image editing", "Video playback"],
      correct: "DOM manipulation"
    },
    {
      q: "Which symbol is used for jQuery?",
      a: ["$", "#", "@", "&"],
      correct: "$"
    },
    {
      q: "Which method hides elements in jQuery?",
      a: [".hide()", ".vanish()", ".none()", ".displayOff()"],
      correct: ".hide()"
    },
    {
      q: "JavaScript mainly runs in the ___",
      a: ["Browser", "Excel", "Word", "Paint"],
      correct: "Browser"
    },
    {
      q: "Which is NOT a JavaScript data type?",
      a: ["String", "Boolean", "Character", "Number"],
      correct: "Character"
    },
    {
      q: "Which method adds HTML content at the end in jQuery?",
      a: [".push()", ".append()", ".addTo()", ".htmlEnd()"],
      correct: ".append()"
    },
    {
      q: "What does DOM stand for?",
      a: [
        "Document Object Model",
        "Data Object Manager",
        "Digital Output Mode",
        "Document Order Machine"
      ],
      correct: "Document Object Model"
    },
    {
      q: "Which event fires when a button is clicked?",
      a: ["hover", "load", "click", "change"],
      correct: "click"
    },
    {
      q: "Which jQuery method shows hidden elements?",
      a: [".visible()", ".show()", ".appear()", ".display()"],
      correct: ".show()"
    }
  ];

  const letters = ["A", "B", "C", "D"];

  let score = 0;
  let index = 0;
  let answered = false;

  function showQuestion(i) {
    const q = questions[i];
    answered = false;

    let html = `<p><strong>Q${i + 1}. ${q.q}</strong></p>`;

    q.a.forEach((ans, idx) => {
      html += `
        <button class="answer" data-answer="${ans}">
          ${letters[idx]}. ${ans}
        </button>
      `;
    });

    $("#question-box").html(html);
  }

  // When user selects an answer
  $(document).on("click", ".answer", function () {
    if (answered) return;
    answered = true;

    const selected = $(this).data("answer");
    const correct = questions[index].correct;

    $(".answer").prop("disabled", true);

    // highlight correct answer
    $(".answer").each(function () {
      if ($(this).data("answer") === correct) {
        $(this).css({
          "background": "#b7ffb7",
          "font-weight": "bold"
        });
      }
    });

    // highlight wrong answer
    if (selected !== correct) {
      $(this).css({
        "background": "#ffb2b2"
      });
    }

    // update score
    if (selected === correct) {
      score++;
      $("#score").text(score);
    }

    // Auto-next after a short delay
    setTimeout(() => {
      index++;

      if (index < questions.length) {
        showQuestion(index);
      } else {
        alert("Quiz Completed!\nYour Score: " + score + " / " + questions.length);
        // restart
        score = 0;
        index = 0;
        $("#score").text(score);
        showQuestion(index);
      }
    }, 900);
  });

  // Start quiz
  $("#score").text(score);
  showQuestion(0);

});


