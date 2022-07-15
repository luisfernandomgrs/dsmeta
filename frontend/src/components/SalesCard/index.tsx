//import icon from '../../assets/img/notification-icon.svg'
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
        </div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="dsmeta-sales-table-show990">ID</th>
              <th className="dsmeta-sales-table-show576">Data</th>
              <th>Vendedor</th>
              <th className="dsmeta-sales-table-show990">Visitas</th>
              <th className="dsmeta-sales-table-show990">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="dsmeta-sales-table-show990">#341</td>
              <td className="dsmeta-sales-table-show576">08/07/2022</td>
              <td>Adelaide Walker</td>
              <td className="dsmeta-sales-table-show990">15</td>
              <td className="dsmeta-sales-table-show990">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="dsmeta-sales-table-show990">#341</td>
              <td className="dsmeta-sales-table-show576">08/07/2022</td>
              <td>Jimmy Freeman</td>
              <td className="dsmeta-sales-table-show990">15</td>
              <td className="dsmeta-sales-table-show990">11</td>
              <td>R$ 83300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="dsmeta-sales-table-show990">#341</td>
              <td className="dsmeta-sales-table-show576">08/07/2022</td>
              <td>Kaylin Daugherty</td>
              <td className="dsmeta-sales-table-show990">15</td>
              <td className="dsmeta-sales-table-show990">11</td>
              <td>R$ 7400.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard