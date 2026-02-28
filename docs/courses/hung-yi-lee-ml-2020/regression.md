# Regression
> 回归
## Key Points

_Record the core concepts from this lecture here._

## Notes

1. Step1: Model

2. Step2: Goodness if Function
> supervised learning

> ŷ 在统计学和机器学习里有明确的叫法和含义：
> 英文读法：y-hat（/waɪ hæt/）
> 中文叫法：y 帽、y 估计值 或 y 预测值
> 含义：它代表因变量 y 的预测值或估计值，用来和真实观测值 y 做区分，常见于线性回归等模型中。

其中提到了如何评估模型的好坏，回归模型常用均方误差（MSE）作为评估指标。
$$
L(w, b) = \sum_{n=1}^{10} \left( \hat{y}^n - \left( b + w \cdot x_{cp}^n \right) \right)^2
$$

> $$
> a = \sum_{n=1}^{10}
> $$
>
> 这个符号代表，求 n = 1 到 n=10 的求和

3. Step3: Best Function/Gradient Descent

> 函数可微：
>
> - 一元函数：在任意一点，可以存在唯一的切线
> - 多元函数：在任意一点，可以存在唯一的切面
>
> ### 为什么要关心可微性？ 💡
>
> 在机器学习和优化中，可微性至关重要：
>
> - 只有函数可微，我们才能使用**梯度下降**等优化算法来找到最小值。
> - 梯度 ∇f 告诉我们函数变化最快的方向，是模型训练的核心。

Learning rate

> 微分：曲线在某一点的微分 / 导数，就是：该点切线的斜率
>
> 曲面就不是一个导数了，而是**两个方向的导数**，叫**偏微分 / 偏导数**。
>
> 
>
> 曲面上某点的微分怎么求？
>
> 曲面上一个点，**切线不止一条，有无数条**。
>
> 我们一般只算两个最关键的：
>
> 1. **对 x 的偏导数**：∂x∂z
>
>    沿着 x 方向切一刀，切线的斜率。
>
>    
>
> 2. **对 y 的偏导数**：∂y∂z
>
>    沿着 y 方向切一刀，切线的斜率。
>
>    
>
> 这两个合起来，就描述了曲面在这一点的**倾斜程度**。
>
> 
>
> 怎么算？（超级简单）
>
> 规则：
>
> 对 x 求偏导时，把 y 当成常数；
>
> 对 y 求偏导时，把 x 当成常数。

> 法线：法线 = 垂直于切线 / 切面的那条直线。

A morew complex model does not always lead to better performance on testing data.

This is Overfitting

> Overfitting: 过拟合

Regularization



## Stochastic Gradient Descent

## Feature Scaling







 






























## References

- [Lecture Video](https://www.youtube.com/watch?v=fegAeph9UaA)
