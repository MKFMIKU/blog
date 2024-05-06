---
author: Kangfu Mei
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2023-12-21T09:12:47.400Z
title: 万物起源于ODE
slug: adding-new-posts-in-astropaper-theme
featured: true
draft: false
tags:
  - Diffusion Models
description: 万物起源于ODE
---

## 微分与积分 differential and integral calculus

在微积分里面，微分用来描述某种事物变换的速度，例如曲线 $f(x)$ 在某个点 $x_0$ 斜率 $f'(x_0)$。而后者（积分）用来描述变换的量，例如曲线在某个范围 $x_0$ 到 $x_1$ 内的面积 $\int_{x_0}^{x_1} f(x) dx$。

> $\Delta y$ 和 $\Delta x$ 用来表示有限的增长。 莱布尼茨记号 $d x$ 是用来表示在 $x$ 上无限小的增长。例如 $y=x^2$ 可以记为 $\frac{dy}{dx} = 2x$。

<!-- ![](https://upload.wikimedia.org/wikipedia/commons/0/05/Tangent_line_to_a_curve.svg) -->

## 微分方程 differential equation

关于一个函数本身与其导数之间的关系叫微分方程（即函数每个点的斜率组成的新的函数）。例如 $\frac{dy}{dx} = f(x)$ 是用 $f(x)$ 来描述 $y$ 对于 $x$ 的导数之间的关系。

假设我们有一组变量 $u$ 和 $x$，他们的关系是未知的，即 $u$ 是 $x$的一个未知的函数。$c$ 和 $w$ 是一对已知的常量。我们可以构造一下的例子：

| ODE | （一阶）常微分             | （二阶）常微分                             | 非线性常微分               |
| --- | -------------------------- | ------------------------------------------ | -------------------------- |
|     | $\frac{du}{dx} = cu + x^2$ | $\frac{d^2 u}{dx^2} - x\frac{du}{dx} = u $ | $\frac{du}{dx} = u^2 + w $ |

对于多变量的未知函数 $u$ 取决于 $x$ 和 $t$，我们有：

| PDE | （一阶）偏微分                                                   | （二阶）偏微分                                                          | 非线性偏微分                                                                                         |
| --- | ---------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|     | $\frac{\partial u}{\partial t} = t\frac{\partial u}{\partial x}$ | $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 u}{\partial t^2}$ | $\frac{\partial u}{\partial t} = u\frac{\partial u}{\partial x} - \frac{\partial^2 u}{\partial x^2}$ |

## Neural ODE

## References

- 微分学的符号定义: https://en.wikipedia.org/wiki/Notation_for_differentiation
