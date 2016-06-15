# Frequency
A plug and play PubSub system that just works as it were a radio :)))

### Why another pubsub pattern you ask?
The answer is pretty simple. Creating pubsub events will stay in memory for a single page application and even for a non SPA. This means that you will accumulate memory usage depending how much you rely on this pattern. Frequency allows you to be in full control with a facade in which radio stations are still allowed to broadcast. Although still imperative code, it gives a human readable grasp to extend the module
