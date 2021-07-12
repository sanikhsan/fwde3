/* eslint-disable no-undef */
Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Showing empty favorite restaurants", ({ I }) => {
  I.seeElement(".posts");
  I.see("Kamu tidak memiliki restoran favorit!", ".posts");
});

Scenario("Liking one favorite restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".posts");
  I.click(locate("a .post").first());

  I.seeElement(".detail-post");
  const itemTitle = await I.grabTextFrom(".detail-post__title");

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeTextEquals(itemTitle, ".post__title");
});

Scenario("Unliking one favorite restaurant", async ({ I }) => {
  I.see("Kamu tidak memiliki restoran favorit!", ".posts");

  I.amOnPage("/");

  I.seeElement(".posts");
  I.click(locate("a .post").first());

  I.seeElement(".detail-post");
  const itemTitle = await I.grabTextFrom(".detail-post__title");

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".posts");
  I.seeTextEquals(itemTitle, ".post__title");

  I.click(locate("a .post").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".posts");

  I.seeTextEquals("Kamu tidak memiliki restoran favorit!", ".posts");
});

Scenario("Create a new review", async ({ I }) => {
  I.see("Kamu tidak memiliki restoran favorit!", ".posts");

  I.amOnPage("/");

  I.seeElement(".posts");
  I.click(locate("a .post").first());

  I.seeElement(".form_review_wrapper form");

  I.fillField("fullname", "San Ikhsan");
  I.fillField("description", "Ini adalah restoran yang luar biasa, saya menginginkannya!");

  I.click("Submit", "#create-review");

  I.seeTextEquals("Ini adalah restoran yang luar biasa, saya menginginkannya!", locate(".user__wrapper .user__info p").last());
});
