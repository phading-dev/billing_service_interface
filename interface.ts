import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PaymentMethodMasked, PAYMENT_METHOD_MASKED } from './payment_method_masked';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { PaymentMethodUpdates, PAYMENT_METHOD_UPDATES } from './payment_method_updates';

export interface ListPaymentMethodsRequestBody {
}

export let LIST_PAYMENT_METHODS_REQUEST_BODY: MessageDescriptor<ListPaymentMethodsRequestBody> = {
  name: 'ListPaymentMethodsRequestBody',
  fields: [
  ]
};

export interface ListPaymentMethodsResponse {
  paymentMethods?: Array<PaymentMethodMasked>,
}

export let LIST_PAYMENT_METHODS_RESPONSE: MessageDescriptor<ListPaymentMethodsResponse> = {
  name: 'ListPaymentMethodsResponse',
  fields: [
    {
      name: 'paymentMethods',
      messageType: PAYMENT_METHOD_MASKED,
      isArray: true,
    },
  ]
};

export let LIST_PAYMENT_METHODS: ServiceDescriptor = {
  name: "ListPaymentMethods",
  path: "/ListPaymentMethods",
  body: {
    messageType: LIST_PAYMENT_METHODS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_PAYMENT_METHODS_RESPONSE,
  },
}

export interface UpdatePaymentMethodsRequestBody {
  paymentMethodUpdates?: PaymentMethodUpdates,
}

export let UPDATE_PAYMENT_METHODS_REQUEST_BODY: MessageDescriptor<UpdatePaymentMethodsRequestBody> = {
  name: 'UpdatePaymentMethodsRequestBody',
  fields: [
    {
      name: 'paymentMethodUpdates',
      messageType: PAYMENT_METHOD_UPDATES,
    },
  ]
};

export interface UpdatePaymentMethodsResponse {
}

export let UPDATE_PAYMENT_METHODS_RESPONSE: MessageDescriptor<UpdatePaymentMethodsResponse> = {
  name: 'UpdatePaymentMethodsResponse',
  fields: [
  ]
};

export let UPDATE_PAYMENT_METHODS: ServiceDescriptor = {
  name: "UpdatePaymentMethods",
  path: "/UpdatePaymentMethods",
  body: {
    messageType: UPDATE_PAYMENT_METHODS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: UPDATE_PAYMENT_METHODS_RESPONSE,
  },
}

export interface CreateStripeSessionToAddPaymentMethodRequestBody {
  backUrl?: string,
}

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_REQUEST_BODY: MessageDescriptor<CreateStripeSessionToAddPaymentMethodRequestBody> = {
  name: 'CreateStripeSessionToAddPaymentMethodRequestBody',
  fields: [
    {
      name: 'backUrl',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateStripeSessionToAddPaymentMethodResponse {
  redirectUrl?: string,
}

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_RESPONSE: MessageDescriptor<CreateStripeSessionToAddPaymentMethodResponse> = {
  name: 'CreateStripeSessionToAddPaymentMethodResponse',
  fields: [
    {
      name: 'redirectUrl',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD: ServiceDescriptor = {
  name: "CreateStripeSessionToAddPaymentMethod",
  path: "/CreateStripeSessionToAddPaymentMethod",
  body: {
    messageType: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_STRIPE_SESSION_TO_ADD_PAYMENT_METHOD_RESPONSE,
  },
}
