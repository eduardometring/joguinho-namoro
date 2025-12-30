const questions = [
    {
        question: "Quando conversamos pela primeira vez?",
        answers: ["10 de junho", "9 de junho", "11 de junho", "11 de setembro"],
        correct: 0
    },
    {
        question: "Quando nos conhecemos pessoalmente?",
        answers: ["19 de junho", "25 de junho", "23 de junho", "20 de junho"],
        correct: 2
    },
    {
        question: "Quem é mais lindo?",
        answers: ["May", "Eduardo"],
        correct: 0
    },
    {
        question: "Quem é mais delicinha?",
        answers: ["Eduardo", "May"],
        correct: 1
    },
    {
        question: "Quem é mais insuportável?",
        answers: ["Eduardo", "May"],
        correct: 0
    },
    {
        question: "Qual o nome da nossa primeira filha?",
        answers: ["Cloe", "Sergio Ricardo de Lazaro"],
        correct: 0
    },
    {
        question: "Quando começamos a namorar?",
        answers: ["27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro", "27 de setembro"],
        correct: 0
    },
    {
        question: "Que dia fomos ao cinema?",
        answers: ["24 de setembro", "23 de setembro", "22 de setembro", "21 de setembro"],
        correct: 2
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const div = document.createElement("div");
        div.classList.add("answer");
        div.innerText = answer;
        div.onclick = () => selectAnswer(index);
        answersDiv.appendChild(div);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").innerHTML = `
        <h2>💖 Fim do Quiz 💖</h2>
        <p>Você acertou ${score} de ${questions.length} perguntas!</p>
        <p>Te amo amor❤️. Se você chegou até aqui, é porque nosso amor ja venceu o jogo, independente da sua pontuação amor. Eu te amo infinitamente e vou te amar pra sempre. Espero muito poder passar todos os dias que me restam ao seu lado. Te amo MUITO💞 e não vejo a hora de a gente casar e ter o nosso bebezinho. Sei que posso não ser o namorado perfeito, mas esse foi um jeitinho de fazer algo minimamente bonitinho pro amor da minha vida ver. Para sempre nós amor💞💕💕🩷🩷</p>
    `;
    document.getElementById("nextBtn").style.display = "none";

}

loadQuestion();
