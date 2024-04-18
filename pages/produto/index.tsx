import Details from "@/components/Details";
import ProductList from "@/components/Landing/ProductList";
import { Products } from "@/database/products";
import Layout from "@/layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DetailsPage() {
  const cart = useSelector((state: any) => state.cart);
  cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0)
  const [mesage, setMesage] = useState('');

  const MessageGenerator = () => {
    cart.reduce((acc: any, curr: any) => {
      setMesage(acc += `<h3 class="form-heading" align="left">${curr.title}</h3><p class="form-answer" align="left">${curr.quantity}</p>`);
    }, "");

  }


  const tableRender = (products: any) => {
    let html = ''
    html += '<table>'
    products.forEach((product: any) => {
      html += `
      <tr>
        <td class="esdev-adapt-off" align="left"
          style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
          <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
            <tr>
              <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                  <tr>
                    <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:70px">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img"
                              src="${product.imageUrl}"
                              alt
                              style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                              width="70"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="padding:0;Margin:0;width:20px"></td>
              <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                  <tr>
                    <td align="center" style="padding:0;Margin:0;width:265px">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="left" style="padding:0;Margin:0">
                            <p
                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                              <strong>${product.title}</strong></p>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="padding:0;Margin:0;padding-top:5px">
                            <p
                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                              ${product.brand}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="padding:0;Margin:0;width:20px"></td>
              <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                  <tr>
                    <td align="left" style="padding:0;Margin:0;width:80px">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <p
                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                              ${product.brand}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="padding:0;Margin:0;width:20px"></td>
              <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                  <tr>
                    <td align="left" style="padding:0;Margin:0;width:85px">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="right" style="padding:0;Margin:0">
                            <p
                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                              ${product.price}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    })
    html += '</table>'

    setMesage(html)
  }

  useEffect(() => {
    tableRender(Products)
  }, [cart])


  cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0)

  const generateEmailContent = () => {
    const htmlData = Products.reduce((acc: any, curr: any) => 
      acc += `<h3 class="form-heading" align="left">${curr.title}</h3><p class="form-answer" align="left">${curr.price}</p>`
    , "");
    console.log(htmlData)
  }

    return (
      <>
        <Head>
          <title>LovMaria | Loja de Roupas</title>
          <meta name="description" content="Looks únicos para momentos marcantes ♡" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <p onClick={generateEmailContent}>Test</p>
          {mesage}
        </Layout>
      </>
    );
  }