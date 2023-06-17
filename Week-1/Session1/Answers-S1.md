

# What is a protocol stack, and how is it used in web development?

- Protocol stack is basically an architecture related to web. It is a layered collection of some     protocols that combinely help in providing communication services. Each protocol has specific task and by grouping them into layers it creates a robust system.

![alt text](protocols_stack.png?raw=true "Title")

- Here are types of transport layer and usage:
<ins>Link Layer:</ins> This layer consists of ethernet cable. Any internet we use Ethernet cable is used at root level. Be it like WiFi or Mobile internet or simple broadband connection.

<ins>Network Layer:</ins> This layer include the ip addresses like ipv4, ipv6.

<ins>Transport Layer:</ins> As the name suggests, this layer works as transport protocol. It checks in network if a system is willing to accept information or not. It breaks data into smaller part so that information doesn't get attenuated. Examples are TCP and UDP. TCP is most oftenly used. But in most streaming related functionality UDP is also used. Also UDP is faster but there are chances of package loss where as TCP ensures the sequence.

<ins>Application Layer:</ins> It serves the purpose of security. It uses services like HTTPS and TLS and establish a simple, secure and encrypted connection.


# What are the different types of web servers, and how do they differ in terms of functionality and performance?

- Below mentioned are different type of servers:

![alt text](servertypes.png?raw=true "Title")

- We shall use server based on our requirement. For instance for website we shall use web servers. For database hosting we should use database servers. Similarly for other servers as well.

- Apache, Nginx, Tomcat Internet Information services, etc are some of the open source web servers.



# What is web hosting, and what are the different types of hosting services available for websites?

- After development of a website or webapp, we need to make it visible over the internet. For that we need to host that website. Depending on the hosting technique these servers are divided into below categories:

<ins>Shared Hosting:</ins> In this type of hosting a shared server is used to host website. Just like a room in hostel. It is suited for small scale applications.

<ins>Cloud Hosting:</ins> In this type of hosting there is a cloud service provider like AWS, GCP, Digital Ocean,etc which provides hosting services and servers. It is considered as a membership to a chain of hotels.

<ins>Managed Hosting:</ins> This is one step plus above cloud hosting. In this method we can consider that there is a managing party who manages all cloud servers. Like consider we have 10 websites and all are hosted on different cloud providers or same, then there is a body that manages all of them. This is called as managed hosting.

<ins>VPS Hosting:</ins> Virtual Private Server. These type of server gives us the root access of it. It is like a dedicated server. It is better in terms of speed, security and traffic. However bit complex to configure and expensive. Also it is easy to scale.

<ins>Dedicated Hosting:</ins> These type of servers are suitable to large scale businesses where security and scalability can not be compromised. In this customer has complete control over machine. They can optimize as per their requirements. The hosting provide supplies the physical server, environment and support.



# What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

- As day by day our web applications gains popularity, it may be possible that we may reach from 10 users to 100000000 users. At this time of increased users or traffic it becomes very tough for one machine to handle stuff. Here comes the term Scalability. It means for increasing our web app potential we need to scale it. An application can be scaled by two means:

<ins>Vertical Scaling:</ins> In this type of scaling, web app is scaled by increasing the compute. Like increasing a machine's CPU or RAM to scale up the performance.

<ins>Horizontal Scaling:</ins> It is also known as scaling out. In this technique our infrastructure is scaled by adding nodes to it. This is mostly used for handling large amount of traffics.


# What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?

- SEO stands for search engine optimization. To promote your website digitally, we must ensure the our website comes in few of the top results of a search engine. The concept to optimize and achieve the top position is termed as search engine optimization.

- Following techniques can be used:
1. 	quality content
2. 	earn relevant links
3. 	site’s load speed
4. 	Optimize images
5. 	Add keywords at strategic places
6. 	Streamline site structure and navigation
7. 	Optimize for mobile
8. 	Improve UX
9. 	Update on regular basis
- Out of all this, quality content and relevance affects the most.



