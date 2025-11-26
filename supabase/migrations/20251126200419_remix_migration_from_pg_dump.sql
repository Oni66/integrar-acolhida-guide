CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



SET default_table_access_method = heap;

--
-- Name: migrant_registrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrant_registrations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    full_name text NOT NULL,
    birth_date date NOT NULL,
    nationality text NOT NULL,
    cpf text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: migrant_registrations migrant_registrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrant_registrations
    ADD CONSTRAINT migrant_registrations_pkey PRIMARY KEY (id);


--
-- Name: idx_migrant_registrations_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_migrant_registrations_created_at ON public.migrant_registrations USING btree (created_at DESC);


--
-- Name: idx_migrant_registrations_nationality; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_migrant_registrations_nationality ON public.migrant_registrations USING btree (nationality);


--
-- Name: migrant_registrations Admins can view all registrations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all registrations" ON public.migrant_registrations FOR SELECT TO authenticated USING (true);


--
-- Name: migrant_registrations Anyone can register; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can register" ON public.migrant_registrations FOR INSERT TO authenticated, anon WITH CHECK (true);


--
-- Name: migrant_registrations; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.migrant_registrations ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


