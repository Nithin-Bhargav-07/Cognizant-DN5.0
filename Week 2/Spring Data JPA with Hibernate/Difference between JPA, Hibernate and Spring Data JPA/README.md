# Difference between JPA, Hibernate and Spring Data JPA

## My Understanding of the Java Persistence Stack

When I first started working on these Spring Boot assignments, I found the database terminology pretty confusing. It seemed like JPA, Hibernate, and Spring Data JPA were being used interchangeably. 

After building the initial hands-on project, I realized they are not the same thing. Here is how I currently understand the differences between them and how they work together.

## 1. JPA (Jakarta Persistence API): 
I understood JPA to be a pure specification. It provides a set of rules and guidelines for how my Java objects should map to relational database tables. 

When I add annotations to my Java classes, I am using JPA. Here is a quick example of how I used it:

```java
@Entity
@Table(name="country")
public class Country {
    @Id
    private String code;
}
```

However, I learned that JPA itself does not contain the actual logic to save data. If I only use JPA, my application cannot talk to the database. It just acts as a blueprint.

## 2. Hibernate: 
If JPA is the blueprint, I see Hibernate as the actual engine that does the work. It is an Object Relational Mapping framework that implements the JPA rules.

Hibernate reads the JPA annotations I write, translates them into the necessary SQL queries, and physically executes them against my MySQL database. While Hibernate is very powerful, writing pure Hibernate code requires a lot of manual setup. 

If I had to use raw Hibernate to save a country my code would look something like this:

```java
Session session = sessionFactory.openSession();
session.beginTransaction();
session.save(myCountry);
session.getTransaction().commit();
session.close();
```

## 3. Spring Data JPA: 
This is the layer that makes writing the code much easier for me. Spring Data JPA is an abstraction built on top of JPA to manage the underlying engine, which is Hibernate in my current setup.

Instead of writing all the repetitive connection code from the Hibernate example, Spring Data JPA lets me just create a simple interface. It automatically generates all the basic create, read, update, and delete methods in the background. 

All I had to write to get my database queries working was this:

```java
@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
    // Spring automatically implements the queries for me here.
}
```

## Conclusion
My main takeaway is that these tools are simply stacked on top of one another to make development easier. I use JPA annotations to define what my data looks like, Hibernate runs silently in the background to handle the heavy database lifting, and Spring Data JPA acts as the top layer so I do not have to write endless boilerplate code. Breaking the architecture down this way really helped me understand how my backend is actually functioning.