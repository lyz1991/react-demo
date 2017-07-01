import proto from '../less/proto'
import React from 'react'
export default class Proto extends React.Component {
  render () {
    return (
      <div className='mordal'>
        <div className={proto.diacontainer}>
          <img src="static/images/close.png" className={proto.close} onClick={() => {
            this.props.close()
          }}/>
          <div>
            <p>
              北京闪银奇异科技有限公司（以下简称本公司）尊重并保护用户隐私，
              本公司将按照本隐私权协议（以下简称“本协议”）收集、使用及共享您的
              个人信息。本协议包含了我们收集、存储、保护、使用和共享您的个人信
              息的条款，我们建议您完整地阅读本协议，以帮助您了解维护自己隐私权
              的方式。为了使您充分理解本协议，本协议中与您的权益存在或可能存在
              重大关系的条款，我们已采用粗体字进行标注提示您注意。当您同意《服
              务与隐私协议》时，或您访问公司网站及移动设备客户端时，或您使用我
              们提供的任一服务时，即表示您已同意我们按照本协议来合法使用和保护
              您的个人信息。
            </p>
            <p>
              我们收集、使用您的信息是出于遵守国家法律法规的规定以及向您提
              供服务及提升服务质量的目的（包括支持我们开发新产品或完善已有
              产品功能，为您和其他用户提供更为优质的服务）。若您向我们提供
              了本协议中列明的信息，您可使用更多的闪银奇异服务，和（或）享
              受更便捷的客户服务，和（或）让我们更好地保护您的账户及资金安
              全，和（或）避免我们无法及时与您取得联系而产生对您不利的影响
              等。
            </p>
            <h2 className={proto.title}>一、个人信息的收集范围</h2>
            <p>
              当您访问我公司网站或移动设备客户端时，或您使用闪银奇异其他服务时
              ，您会向我们主动提供一些信息，我们也会收集您的一些信息，我们也可
              能会从关联公司和商业合作伙伴获得信息以补充我们自己收集的信息，以
              向您提供支付服务。
            </p>
            <h2 className={proto.title}>我们收集信息的范围主要包括：</h2>
             <p>
              1、为了遵守法律法规的要求，以及向您提供更个
              性化、更便捷的服务，我们需要识别您的身份。在您注册
              闪银奇异账户或使用闪银奇异提供的各项服务时，您可能
              要向我们提供一些个人信息，例如您的姓名、身份证明、
              地址、电话号码和常用电子邮件地址、生物特征等信息及
              相关附加信息（如您所在的省份和城市、邮政编码等）。 
            </p>
            <p>
              2、如您使用的闪银奇异服务需与您的银行账户或
              其他支付工具的账户关联方能实现时，您需要向我们提供
              您的银行账户信息或其他支付工具的账户信息。 
            </p>
            <p>
              3、为了注册闪银奇异或提升额度，您提供的注册申请地点、淘宝交易记录、
              学信网信息、新浪微博、腾讯微博、人人网信息、信用卡账单邮箱信息、银行卡信息。 
            </p>
            <p>
              4、为了便于您与您的好友进行更加灵活、安全的资金往来，
              避免因手动输入闪银奇异登录名错误而产生损失，我们将通
              过您登陆app获取您的通讯录信息；当您的闪银奇异账户所
              关联的手机号码被保存在他人手机通讯录中时，您的闪银奇
              异登录名、姓名等可以被通讯录存有该手机号码的好友查询
              到。 
            </p>
            <p>
              5、为了确认和评估您的资信状况，我们通过官方认证及第
              三方平台获取的您的仅用于评估您的信用状况的信息。 
            </p>
            <p>
              6、为便于您查询您的交易状态或历史记录，也为了遵守法
              律法规的规定，我们会保存您使用闪银奇异服务产生的交易
              信息，并严格按照法律法规的规定对这些信息进行妥善保管。 
            </p>
             <p>
              7、为了充分保护您的账户安全，当您访问闪银奇异网站及其
              相关网站、或闪银奇异移动设备客户端时，或使用闪银奇异
              提供的服务时，我们可能会记录您操作的相关信息，包括但
              不限于您的计算机IP地址、设备标识符、硬件型号、操作系
              统版本、您的位置以及与闪银奇异服务相关的日志信息，这
              些信息可帮助我们更好地识别您的身份以及保护您的账户安
              全，例如您的账户在可疑操作环境下登录的，闪银奇异系统
              可能监控到您的账户风险，采取一些措施避免您的资金损失。 
            </p>
            <p>
              除上述信息外，我们还可能为了提供服务及改进服务质量的
              合理需要而收集您的其他信息，包括您与我们的客户服务团队
              联系时您提供的相关信息，您参与问卷调查时向我们发送的问
              卷答复信息，以及您与闪银奇异关联公司、商业合作公司互动
              时我们收集的相关信息。与此同时，为提高您使用闪银奇异提
              供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒,
              我们可能会通过了解一些您的网络使用习惯、您常用的软件
              信息等手段来判断您账户的风险，并可能会记录一些我们认
              为有风险的URL。
            </p>
            <h2 className={proto.title}>二、Cookie的使用</h2>
            <p>
              为使您获得更轻松的访问体验，您访问闪银奇异网站或使用闪银奇
              异提供的服务时，我们可能会通过小型数据文件识别您的身份，这么做
              是帮您省去重复输入注册信息的步骤，或者帮助判断您的账户安全。这
              些数据文件可能是Cookie，Flash Cookie，或您的浏览器或关联应用
              程序提供的其他本地存储（统称“Cookie”）。 请您理解，我们的某些
              服务只能通过使用“Cookie”才可得到实现。如果您的浏览器或浏览器附
              加服务允许，您可以修改对Cookie的接受程度或者拒绝闪银奇异的Cook
              ie，但这一举动在某些情况下可能会影响您安全访问闪银奇异网站和使用
              闪银奇异提供的服务。
            </p>
            <h2 className={proto.title}>三、保护和存储个人信息</h2>
            <p>为保障您的信息安全，我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的信息，使您的信息不会被泄漏、毁损或者丢失，包括但不限于SSL、信息加密存储、数据中心的访问控制。我们对可能接触到您的信息的员工或外包人员也采取了严格管理，包括但不限于根据岗位的不同采取不同的权限控制，与他们签署保密协议，监控他们的操作情况等措施。 闪银奇异会按现有技术提供相应的安全措施来保护您的信息，提供合理的安全保障，闪银奇异将在任何时候尽力做到使您的信息不被泄漏、毁损或丢失 您的信息存储于中国的服务器上，为了安全及备份的需要，闪银奇异可能将您的信息和资料储存到闪银奇异关联公司和商业合作其他公司的服务器上。
            </p>
            <h2 className={proto.title}>四、个人信息的使用</h2>
            <p>因收集您的信息是出于遵守国家法律法规的规定以及向您提供服务及提升服务质量的目的，为了实现这一目的，我们会把您的信息用于下列用途： 
            </p>
            <p>
              1、向您提供闪银奇异的各项服务及客户服务，并维护、改进这些服务。 
            </p>
            <p>
              2、比较信息的准确性，并与第三方进行验证。例如，将您向我们提交的身份
              信息与身份验证的服务机构进行验证。 
            </p>
            <p>
              3、为使您知晓自己使用闪银奇异服务的情况或了解闪银奇异的服务，向您发送
              服务状态的通知、营销活动及其他商业性电子信息。 
            </p>
            <p>4、对闪银奇异用户的身份数据、交易信息等进行综合统计、分析或加工，并出于
            销售、奖励或为了让您拥有更广泛的社交圈的需要而使用、共享或披露；例如我们
            可能会统计某个时间段注册闪银奇异账户的新用户，对这些新用户提供专享的优惠活动。 
            </p>
            <p>5、预防或禁止非法的活动。 </p>
            <p>6、经您许可的其他用途。</p>
            <h2 className={proto.title}>五、授权条款</h2>
            <p>1、对于您提供的资料、数据信息，及本协议第一条中描述信息，您授予本公司及其关
            联公司独家的、全球通用的、永久的、免费的许可使用权利 (并有权在多个层面对该权
            利进行再授权)。此外，本公司及其关联公司有权(全部或部分地) 使用、复制、修订
            、改写、发布、翻译、分发、执行和展示您的全部资料数据（包括但不限于注册资料、
            交易行为数据及全部展示于闪银奇异的各类信息）。 </p>
            <p>2、本公司关联公司将逐渐允许闪银奇异用户登录关联公司平台并使用其服务，闪银奇
            异用户在关联公司平台的任何行为均需遵守该等平台服务协议的约定、平台公布的规则
            以及有关正确使用平台服务的说明和操作指引。为了实现上述功能，您同意本公司将您
            在闪银奇异的注册信息、交易/支付数据等信息和其他数据同步至关联公司系统并允许
            其使用。 </p>
            <p>3、您理解并同意，您注册使用闪银奇异时，即授权本公司根据您所提供的各项信息及本
            公司独立获得的信息评定您在本公司所拥有的个人信用额度，或决定是否审核通过您的服
            务申请。   </p>
            <p>4、您理解并同意，授权我公司使用您注册闪银奇异账户或使用闪银奇异提供的各项服务时，
            您提供的个人信息，例如姓名、身份证明、地址、电话号码和常用电子邮件地址、生物特征
            等信息及相关附加信息（如您所在的省份和城市、邮政编码等）。     </p>
            <p>5、您理解并同意，授权我公司获得并使用您向本公司提供信用卡账单邮箱数据。    </p>
            <p>6、您理解并同意，授权我公司使用您的学信网账户。如您已注册学信网的，本公司将
            可能通过您的学信网账户查看并读取您的学籍信息；如您在授权时尚未注册学信网账户，
            本公司将基于您的授权代您申请注册学信网账户。    </p>
            <p>7、您理解并同意，如您向本公司提交、绑定或授权您的银行卡信息／账户，本公司将可能:   </p>
            <p>1） 查询并核对您的账户信息。     </p>
            <p>2） 查询并读取您银行卡账户中的交易信息。     </p>
            <p>3） 基于《借款与还款协议》通过您所授权或绑定的银行卡账户进行代收与代付服务。     </p>
            <p>8、您理解并同意，如您向本公司授权您的新浪微博、腾讯微博、人人网信息、淘宝等账户，
            本公司将可能读取您所授权的账号中的相关信息。    </p>
            <p>9、您理解并同意，在您注册或使用闪银奇异时，本公司将可能依据《征信业管理条例》
            及相关法律法规，向第三方支付/征信/金融机构合法了解、获取、核实您的信用信息。
            所获取的个人信用信息仅在闪银奇异业务中使用，且不向其他机构、个人提供或披露。     </p>
            <p>10、您理解并同意，如您使用了提现或支付功能，则应当依据《借款与还款协议》中约定
            之日期按期进行还款，本公司有权通过短信、电话、社交账号等途径对您进行服务与还款
            提醒。您理解并同意，如您未有按期履行还款义务，您的个人逾期信息将可能向第三方进
            行分享或公布。     </p>
            <p>11、您理解并同意，为了便于您与您的好友进行更加灵活、安全
            的资金往来，避免因手动输入闪银奇异登录名错误而产生损失，您将授权我公司获取您的
            通讯录信息；当您的闪银奇异账户所关联的手机号码被保存在他人手机通讯录中时，您的
            闪银奇异登录名、姓名等可以被通讯录存有该手机号码的好友查询到。     </p>
            <p>12、您理解并同意，在注册过程中选择的银行或第三方合作机构基于更好的为您提
            供服务有权获得您的相关信息。     </p>
            <p>13、您理解并同意，我们可以储存您授权的原始信息；在您和我们的合作存续期间，
            我们随时可以从新采集和更新数据，对于经过加工和脱敏处理的数据，我们可以永久
            保存在服务器上；对于原始数据，在合作结束后，我们保留最长不超过90天。    </p>
            <p>14、您理解并同意，您不可撤销的授权本公司、本公司关联公司/合作公司向合法经
            营的第三方查询或核实您的相关信息；您同意本公司、本公司关联公司/合作公司有
            权对您的相关交易信息进行收集并在与业务相关的其他第三方之间共享；同时同意本
            公司、本公司关联公司/合作公司将查询获取的信息进行保存、整理、加工。（但法律、
            法规、监管政策禁止查询的除外）。</p>
             <h2 className={proto.title}>六、共享个人信息</h2>
             <p>我们对您的信息承担保密义务，但我们会在下列情况下将您的信息与第三方共享： </p>
            <p>1、获得您的同意或授权。 </p>
            <p>2、为了向您提供或推荐服务、产品，或为了向您提供
            更完善的服务，或者为了让您拥有更广泛的社交体验，我们会与包括闪银奇异关联
            公司、旗下公司及合作商户在内的第三方共享您的相关信息。     </p>
            <p>3、某些情况下，只有共享您的信息，才能提供您需要的服务和（或）产品，或
            处理您与他人的交易纠纷或争议。     </p>
            <p>4、为了判断您的闪银奇异账户或交易是否安全。     </p>
            <p>5、某些服务和（或）产品由我们的合作伙伴提供或由我们与合作伙伴、供应商共同提
            供，我们会与其共享提供服务和（或）产品需要的信息。     </p>
            <p>6、我们与第三方进行联合推广活动，我们可能与其共享活动过程中产生的、为完成活
            动所必要的个人信息。     </p>
            <p>7、为维护闪银奇异及闪银奇异关联公司、旗下公司和其他闪银奇异用户的合法权益。    </p>
            <p>8、根据法律规定及合理商业习惯，在我们计划与其他公司合并或被其收购或进行其
            他资本市场活动（包括但不限于IPO，债券发行）时，以及其他情形下我们需要接受
            来自其他主体的尽职调查时，我们会把您的信息提供给必要的主体，但我们会通过和
            这些主体签署保密协议等方式要求其对您的个人信息采取合理的保密措施。     </p>
            <p>9、为了便于您与您的好友进行更加灵活、安全的资金往来，避免因手动输入闪银奇异
            登录名错误而产生损失，当您的闪银奇异账户所关联的手机号码被保存在他人手机通
            讯录中时，您的闪银奇异登录名、姓名等可以被通讯录存有该手机号码的好友查询到。
            本协议中所称的“闪银奇异账户关联的手机号码”，是指作为闪银奇异登录名的手机号
            码或闪银奇异账户绑定的手机号码。     </p>
            <p>10、同本部分第9项之目的，他人可以通过您闪银奇异账户关联手机号码查询到对应的
            闪银奇异登录名、您的姓名。     </p>
            <p>11、您与他人通过闪银奇异服务发生资金往来的，交易相对方可在付款过程中，或付款
            成功后可查看到您使用的闪银奇异账户的部分信息（包括闪银奇异登录名、闪银奇异账
            户对应的姓名或昵称、闪银奇异账户头像等，具体以实际可查看信息为准）。   </p>
            <p>12、如您授权第三方向闪银奇异查询、采集您闪银奇异账户相关信息，我们有权在法
            律法规和您的授权许可范围内向第三方分享您闪银奇异账户的部分信息。     </p>
            <p>13、为了维护和改善我们的服务。     </p>
            <p>14、根据法律法规的规定或有权机关的要求。</p>
            <h2 className={proto.title}>七、查询和管理个人信息</h2>
            <p>您可随时登录您的闪银奇异账户查询并管理该账户下您的个人信息，如您遇到任何障碍或疑问，可联系闪银奇异客服</p>
            <h2 className={proto.title}>八、对第三方责任的声明</h2>
            <p>请您注意，您的交易相对方、您访问的第三方网站经营者、您使用的第三方服务提供者和由闪银奇异处接
            受您的个人信息的第三方可能有自己的隐私权保护规则；当您查看第三方创建的网页或使用第三方开发的应
            用程序时，可能会发现该网页或应用程序放置的Cookie或像素标签。同样，这些第三方可能会放置他们自己
            的Cookie或像素标签，这些Cookie或标签不受我们的控制，而且它们的使用不受本协议的约束。     我们会
            尽商业上的合理努力去要求这些主体对您的个人信息采取保护措施，但我们无法保证这些主体一定会按照我们的
            要求采取保护措施，亦不对这些主体的行为及后果承担任何责任。如果您发现这些第三方创建的网页或第三方开
            发的应用程序存在风险时，建议您终止相关操作以保护您的合法权益。</p>
            <h2 className={proto.title}>九、特别注意事项</h2>
            <p>我们仅向年满16周岁的人士提供服务，如果您未满16周岁，请您不要向我们提供任何个人信息，
            也不建议您使用任何闪银奇异提供的服务。</p>
            <h2 className={proto.title}>十、适用范围</h2>
            <p>本协议属于《闪银奇异服务与隐私协议》不可分割的一部分，本协议与《闪银奇异服务与隐私协议》
            的约定不一致的，以本协议为准。除需适用闪银奇异其他单独制订的隐私权规则的服务外，本协议适用于
            您访问闪银奇异网站及其相关网站、闪银奇异移动设备客户端和闪银奇异提供的任一服务。</p>
            <h2 className={proto.title}>十一、协议修订</h2>
            <p>我们可能随时会对本协议进行变更，由于闪银奇异的用户群过于庞大和分散，因此如发生变更，
            我们将选择在闪银奇异网站以公告的方式予以公布而不再另行单独通知您，该等变更将在公布时即时
            生效。若您在本协议变更后继续访问闪银奇异网站及其相关网站、闪银奇异移动设备客户端，或使用
            闪银奇异提供的任一服务，我们相信这代表您已充分阅读、理解并接受修改后的本协议并受之约束。</p>
          </div>
        </div>
      </div>
    )
  }
}
