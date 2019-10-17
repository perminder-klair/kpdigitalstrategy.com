import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const Section = styled.section`
  .first {
    background-color: ${props => props.theme.mainBrandColor};
  }
  .second {
    background-color: ${props => props.theme.backgroundColorGrey};
  }
  p {
    margin-bottom: 0rem;
  }
  .details {
    margin-bottom: 3rem;
  }
  input,
  textarea {
    margin-bottom: 1rem;
    margin-top: 0rem;
    border-radius: 1.5rem;
  }
`;

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <Section className="section">
      <div className="columns">
        <div className="column first">
          <section className="section">
            <div className="container">
              <h3 className="title is-4">Manchester Office</h3>
              <div className="details">
                <p className="has-text-weight-bold">Finding us</p>
                <p>
                  our office is based in the heart of Manchester and is based
                  just to the right of handlé st Peter's, on Hood Street.
                </p>
              </div>
              <div className="details">
                <p className="has-text-weight-bold">From the train station</p>
                <p>
                  We're a 10 minutes walk from Piccadilly Statiob and a 15
                  minutes stroll from Victoria.
                </p>
              </div>
              <div className="details">
                <p className="has-text-weight-bold">Parking</p>
                <p>
                  The car park on Gun Street is our nearest car park. The
                  postcode is M4 5DN. There’s also are car park at Flint Glass
                  Works, 64 Jersey Street M4 6JW
                </p>
              </div>
              <div className="details">
                <p className="has-text-weight-bold">Address</p>
                <p>Address </p>
                <p>Jactin House,</p>
                <p>24 Hood Street,</p>
                <p>Ancoats,</p>
                <p>Manchester, M4 6WX</p>
                <p> M4 6WX</p>
              </div>
              <div className="details">
                <p className="has-text-weight-bold">Telephone</p>
                <p>+44 (0) 161 258 3622</p>
              </div>
              <div className="details">
                <p className="has-text-weight-bold">Email</p>
                <p>hello@kpdigitalstrategy.com</p>
              </div>
            </div>
          </section>
        </div>
        <div className="column second">
          <section className="section">
            <div className="container">
              <h3 className="title is-3">Send us a quick Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <h4 className="subtitle is-6">Email*</h4>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="Your Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <h4 className="subtitle is-6">Phone*</h4>
                    <input
                      className="input"
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone && (
                      <p className="help is-danger">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <h4 className="subtitle is-6">Your Message*</h4>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Type your message here..."
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message && (
                      <p className="help is-danger">{errors.message}</p>
                    )}
                  </div>
                </div>
                <h4 className="subtitle is-6">
                  Once you have submitted your enquiry, a member of the team
                  will get in touch with you within 1 working day.If you need an
                  instant response please message us on our live chat or give us
                  a call on{' '}
                  <span className="has-text-danger">0181 258 3622.</span>
                </h4>
                <h4 className="subtitle is-6">
                  In submitting you agree to our contact{' '}
                  <span className="has-text-danger">terms and conditions.</span>
                </h4>
                <button
                  type="submit"
                  className="button is-danger"
                  disabled={isSubmitting}
                  style={{ width: '25%', marginTop: '2rem' }}
                >
                  Send a Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </Section>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    phone: '',
    message: '',
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required('Full name is required!'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    phone: yup.string().required('Phone Number is required!'),
    message: yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    props.addContact(values);
    setSubmitting(false);
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);
