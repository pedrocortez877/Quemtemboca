CREATE TABLE public."Users"
(
  "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "Email" text NOT NULL,
  "Password" text NOT NULL,
  "Name" text NOT NULL
);

CREATE EXTENSION "uuid-ossp";

CREATE TABLE public."Restaurants"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Name" text NOT NULL,
    "FoodType" text NOT NULL,
    "Evaluation" numeric NOT NULL,
    "DeliveryTime" text NOT NULL,
    "DeliveryValue" numeric NOT NULL,
    "ProfileImage" text NOT NULL,
    "BackgroundImage" text NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE public."ProductCategories"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Name" text NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE public."Products"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Name" text NOT NULL,
    "Description" text,
    "Price" numeric NOT NULL,
    "IdCategory" uuid NOT NULL,
    "IdRestaurant" uuid NOT NULL,
    "Image" text NOT NULL,
    PRIMARY KEY ("Id"),
    CONSTRAINT fk_product_category FOREIGN KEY ("IdCategory")
        REFERENCES public."ProductCategories" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT fk_product_restaurant FOREIGN KEY ("IdRestaurant")
        REFERENCES public."Restaurants" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

