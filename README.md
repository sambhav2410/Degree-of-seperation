# Degree-of-seperation
It is said that all people on average are six, or fewer, social connections away from each
other. Create a React Web App that helps you find the degree of separation between any
two people.

Think of it as selecting two users on Facebook and trying to see how these two people are
connected.

In the app...
1. You should be able to add people.
2. You should be able to add types of relationships (for simplicity, you can just add one friend).
3. You should be able to set the relationships between two people. (Eg. Rahul is a
friend of Sunny)

Once you have inserted all the data, if you select any two people, you should be able to see
the degrees of separation between them.
For example, if you have the following relationships added into your system...

1. Sameer is a Friend of Aayushi
2. Aayushi is a Friend of Bhaskar
3. Sameer is a Friend of Kamalnath Sharma
4. Kamalnath Sharma is a Friend of Shanti Kumar Saha
5. Shanti Kumar Saha is a Friend of Bhaskar

If you select two people, let’s say Sameer and Bhaskar, the application should show the
degree of separation as follows.

1. Sameer > Aayushi > Bhaskar
2. Sameet > Kamalnath Sharma > Shanti Kumar Saha > Bhaskar
