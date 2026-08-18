# 📚 Média Escolar do IFRN

Aplicação para cálculo da média escolar de alunos do IFRN.

O sistema permite informar as notas das avaliações realizadas e calcular a **média ponderada da disciplina**, considerando a quantidade de etapas e os respectivos pesos.

## 🎯 Objetivo

A aplicação foi desenvolvida para simplificar o cálculo da média escolar, permitindo:

* 📊 Informar as notas das avaliações;
* 🧮 Calcular automaticamente a média ponderada;
* 📚 Escolher entre disciplinas com **2 ou 4 etapas**;
* ⚙️ Aplicar automaticamente os pesos correspondentes a cada etapa.

---

## ⚙️ Regras de negócio

O sistema trabalha com duas possibilidades de quantidade de etapas:

* **4 etapas:** E1, E2, E3 e E4;
* **2 etapas:** E1 e E2.

A média é calculada utilizando os pesos definidos para cada tipo de disciplina.

### 📅 Disciplinas com 4 etapas

Para disciplinas com quatro etapas, os pesos são:

| Etapa     |   Peso |
| --------- | -----: |
| **E1**    |      2 |
| **E2**    |      2 |
| **E3**    |      3 |
| **E4**    |      3 |
| **Total** | **10** |

A média é calculada pela soma das notas multiplicadas pelos seus respectivos pesos, dividida pela soma dos pesos.

### 🧮 Exemplo

Considere:

| Etapa     | Nota | Peso | Pontuação |
| --------- | ---: | ---: | --------: |
| E1        |   70 |    2 |       140 |
| E2        |   80 |    2 |       160 |
| E3        |   50 |    3 |       150 |
| E4        |   50 |    3 |       150 |
| **Total** |      |      |   **600** |

Cálculo:

```text
Média = 600 ÷ 10
Média = 60
```

---

## 📖 Disciplinas com 2 etapas

Para disciplinas com duas etapas, os pesos são:

| Etapa     |  Peso |
| --------- | ----: |
| **E1**    |     2 |
| **E2**    |     3 |
| **Total** | **5** |

### 🧮 Exemplo

Considere:

| Etapa     | Nota | Peso | Pontuação |
| --------- | ---: | ---: | --------: |
| E1        |   60 |    2 |       120 |
| E2        |   60 |    3 |       180 |
| **Total** |      |      |   **300** |

Cálculo:

```text
Média = 300 ÷ 5
Média = 60
```

---

## 📐 Fórmulas utilizadas

### 4 etapas

```text
Média = ((E1 × 2) + (E2 × 2) + (E3 × 3) + (E4 × 3)) ÷ 10
```

### 2 etapas

```text
Média = ((E1 × 2) + (E2 × 3)) ÷ 5
```

---

## 🖥️ Funcionalidades

* [ ] Seleção entre **2 ou 4 etapas**;
* [ ] Inserção das notas de cada etapa;
* [ ] Aplicação automática dos pesos;
* [ ] Cálculo da média ponderada;
* [ ] Exibição da média final.

> **Observação:** O sistema tem como finalidade exclusivamente calcular a média. Não realiza cálculo de notas necessárias, simulações de avaliações futuras ou classificação da situação do aluno.