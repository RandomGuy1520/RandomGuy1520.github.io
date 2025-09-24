---
title: OI
date: 2025-09-24 12:23:28
tags:
---

## 题目：

已知对任意 $\{x_i\} (1 \le i \le n)$ 使得 $\forall i, x_i > 0$ 且 $\prod_{i=1}^n x_i=1$，都有：

$\sum_{i=1}^n \frac{1}{x_i} \le \sum_{i=1}^n x_i^{r(n)}$，其中 $r(n)$ 是定实数。

求 $r(n)$ 的取值范围（用 $n$ 表示）。

## 解答：
答案：

$r(n) \in
\begin{cases}
\mathbb{R} & n =1\\
(-\infty, -1]  \ \cup \ [n - 1, +\infty) & n \ge 2
\end{cases}$

$n=1$ 时显然。下假设 $n \ge 2$。

- 引理：若 $\prod_{i=1}^n x_i=1$，则对任意 $\alpha  \ge 1$，$\sum x_i \le \sum x_i^{\alpha}$。

- 引理证明：由 Chebyshev 不等式与均值不等式，$\sum x_i^{\alpha} \ge \frac{1}{n} (\sum x_i^{\alpha - 1}) \times (\sum x_i) \ge (\prod x_i^{\alpha - 1})^\frac{1}{n} \times (\sum x_i) = \sum x_i$，证毕！

（1）先证 $r(n) \subseteq (-\infty, -1]  \ \cup \ [n - 1, +\infty)$。

若 $r(n) \ge 0$ 则取 $t$ 充分大，$x_1=t^{-(n-1)}, x_2=x_3=\cdots=x_n=t$，则有：

$t^{n-1}+(n-1) \frac{1}{t} \le t^{-(n-1)r(n)}+(n-1)t^{r(n)}$，因为 $r(n) \ge 0$，

$\therefore t^{n-1} \le 1+(n-1)t^{r(n)}$，因为 $t$ 充分大，

$\therefore r(n) \ge n-1$。

若 $r(n) < 0$ 则取 $t$ 充分大，$x_1=t^{n-1}, x_2=x_3=\cdots=x_n=t^{-1}$，则有：


$t^{-(n-1)}+(n-1)t \le t^{(n-1)r(n)}+(n-1)t^{-r}$，因为 $r(n) < 0$，

$\therefore (n-1)t \le 1+(n-1)t^{-r}$，因为 $t$ 充分大，

$\therefore r \le -1$。

所以 $r(n) \subseteq (-\infty, -1]  \ \cup \ [n - 1, +\infty)$。

（2）再证对所有 $r(n) \subseteq (-\infty, -1]  \ \cup \ [n - 1, +\infty)$，原式都成立。

若 $r(n) \ge n-1$ 则：

$\sum \frac{1}{x_i}$

$=\sum \frac{\prod_j x_j}{x_i}$

$=x_2x_3 \cdots x_n+x_1x_3 \cdots x_n+\cdots+x_1x_2 \cdots x_{n-1}$

$=(x_2^{n-1}x_3^{n-1} \cdots x_n^{n-1})^\frac{1}{n-1}+(x_1^{n-1}x_3^{n-1} \cdots x_n^{n-1})^\frac{1}{n-1}+\cdots+(x_1^{n-1}x_2^{n-1} \cdots x_{n-1}^{n-1})^\frac{1}{n-1}$

$\le \frac{x_2^{n-1}+x_3^{n-1}+\cdots+x_n^{n-1}}{n-1}+\frac{x_1^{n-1}+x_3^{n-1}+\cdots+x_n^{n-1}}{n-1}+\cdots+\frac{x_1^{n-1}+x_2^{n-1}+\cdots+x_{n-1}^{n-1}}{n-1}$

$=\sum x_i^{n-1}$，由引理，因为 $\prod x_i^{n-1}=1$，取 $\alpha=\frac{r(i)}{n-1}$，有：

$\le \sum (x_i^{n-1})^\alpha=\sum x_i^{r(i)}$ 成立。

若 $r(n) \le -1$ 则：

$\sum \frac{1}{x_i}$

$=\sum x_i^{-1}$，由引理，因为 $\prod x_i^{-1}=1$，取 $\alpha=-r(i)$，有：

$\le \sum (x_i^{-1})^\alpha$

$=\sum x_i^{r(i)}$ 成立。

证毕！ $\square$